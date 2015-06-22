import urllib2, string, json, os, glob, datetime
from itertools import islice
from random import randint
from operator import itemgetter

BASE_DIR = os.path.dirname(os.path.realpath(__file__))

def get_patient_conditions_by_id(*args):
    # first argument is pid
    # (optional) second argument is count on number of conditions to return
    if len(args)==1:
        id = args[0]
        urlstring = 'https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Condition?_format=json&subject.reference=Patient/'+id+'&_count=20'
        response = urllib2.urlopen(urlstring)
    elif len(args) == 2:
        id = args[0]
        count = args[1]
        urlstring = 'https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Condition?_format=json&subject.reference=Patient/'+id+'&_count='+count
        response = urllib2.urlopen(urlstring)
    # else:
        # handle error
    data = json.loads(response.read())
    conditions = []
    dict = {}
    for field in data['entry']: #condition, system, code, status, onsetDate
        # print field
        status = field['content']['status']
        if u'dateAsserted' in field['content'].keys():
            dateAsserted = field['content']['dateAsserted']
        else:
            dateAsserted = 'N/A'
        code = field['content']['code']['coding'][0]['code']
        system = field['content']['code']['coding'][0]['system']
        display = field['content']['code']['coding'][0]['display']
        if u'onsetDate' in field['content'].values():
            onsetDate = field['content']['onsetDate']
        else:
            onsetDate = 'N/A'
        dict = {"display": display, "system": system, "code": code, "status": status, "onsetDate": onsetDate}
        conditions.append(dict)
    # print conditions
    return conditions

def get_patient_medications_by_id(*args):
    # first argument is pid
    # (optional) second argument is count on number of conditions to return
    if len(args)==1:
        id = args[0]
        urlstring = 'https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/MedicationPrescription?_format=json&subject.reference=Patient/'+id+'&_count=20'
        response = urllib2.urlopen(urlstring)
    elif len(args) == 2:
        id = args[0]
        count = args[1]
        urlstring = 'https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/MedicationPrescription?_format=json&subject.reference=Patient/'+id+'&_count='+count
        response = urllib2.urlopen(urlstring)
    # else:
        # handle error
    data = json.loads(response.read())
    medications = []
    dict = {}
    for field in data['entry']: #condition, system, code, status, onsetDate
        # print field
        status = field['content']['status']
        medication = field['content']['medication']['display']
        dateWritten = field['content']['dateWritten']
        prescriber = field['content']['prescriber']['display']
        quantity = field['content']['dispense']['quantity']['value']
        code = field['content']['contained'][0]['code']['coding'][0]['code']#['coding']#['code']
        system = field['content']['contained'][0]['code']['coding'][0]['system']
        doseQuantity = field['content']['dosageInstruction'][0]['doseQuantity']
        dict = {"display": medication, "system": system, "code": code, "status": status, "quantity": quantity, "doseQuantity": doseQuantity, "prescriber": prescriber, "dateWritten": dateWritten}
        medications.append(dict)
    # print medications
    return medications

def get_patient_observations_by_id(*args):
    # first argument is pid
    # (optional) second argument is count on number of conditions to return
    if len(args)==1:
        id = args[0]
        urlstring = 'https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Observation?_format=json&subject.reference=Patient/'+id+'&_count=50'
        print urlstring
        response = urllib2.urlopen(urlstring)
    elif len(args) == 2:
        id = args[0]
        count = args[1]
        urlstring = 'https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Observation?_format=json&subject.reference=Patient/'+id+'&_count='+count
        response = urllib2.urlopen(urlstring)
    # else:
        # handle error
    data = json.loads(response.read())
    observations = []
    dict = {}
    for field in data['entry']: #condition, system, code, status, onsetDate
        # print field
        status = field['content']['status']
        # print field['content']['name']['coding'][0].keys()
        if u'display' in field['content']['name']['coding'][0].keys():
            display = field['content']['name']['coding'][0]['display']
        else:
            display = 'N/A'

        if u'system' in field['content']['name']['coding'][0].keys():
            system = field['content']['name']['coding'][0]['system']
        else:
            system = 'N/A'

        if u'code' in field['content']['name']['coding'][0].keys():
            code = field['content']['name']['coding'][0]['code']
        else:
            code = 'N/A'

        if u'valueQuantity' in field['content'].keys():
            valueQuantity = field['content']['valueQuantity']
        else:
            valueQuantity = 'N/A'

        # print field['content'].keys()
        if u'appliesDateTime' in field['content'].keys():
            appliesDateTime = field['content']['appliesDateTime']
        else:
            appliesDateTime = 'N/A'
        dict = {"display": display, "system": system, "code": code, "status": status, "valueQuantity": valueQuantity, "appliesDateTime": appliesDateTime}
        observations.append(dict)
    # print observations
    return observations



def getPatientByID(pid, name):
#     temp_dict = getDummyDataByID(pid)
#     return temp_dict
    
    obs = get_patient_observations_by_id(pid)
    cond = get_patient_conditions_by_id(pid)
    med = get_patient_medications_by_id(pid)
    
    medSorted = sorted(med, key=itemgetter('dateWritten'), reverse=False)
    obsSorted = sorted(obs, key=itemgetter('appliesDateTime'), reverse=False)
 
    patientDict = {}
    patientDict[pid] = getGraphStyleListsDict (pid, name, cond, obsSorted, medSorted)
    
    return patientDict




def getGraphStyleListsDict (pid, name, cond, obsSorted, medSorted):   
#     print pid
#     print name
#     print cond
#     print obsSorted
#     print medSorted
    
    '''
    CONDITIONS LIST CONSTRUCTION
    '''
    
    condList = []
    for condition in cond:
        condList.append(condition['display'])
    
    '''
    OBSERVATIONS DICT CONSTRUCTION
    '''
    observationsDict = {}
    for observation in obsSorted:
        if observation['display'] not in observationsDict.keys():
            observationsDict[observation['display']] = [[], []]
        
        if (observation['valueQuantity'] != "N/A"):
            if (observation['appliesDateTime'][:-6] != ''):
                observationsDict[observation['display']][0].append( datetime.datetime.strptime(observation['appliesDateTime'][:-6], "%Y-%m-%dT%H:%M:%S").strftime("%d %b %Y") )
                observationsDict[observation['display']][1].append(observation['valueQuantity'][u'value'])
#         else:
#             observationsDict[observation['display']][0].append(observation['appliesDateTime'])
#             observationsDict[observation['display']][1].append(0)
    for k in observationsDict.keys():
        if (len (observationsDict[k][0]) <2): #remove entries with less than 2 data points
            del observationsDict[k]
                        
    '''
    MEDICATIONS DICT CONSTRUCTION
    '''
    medicationsDict = {}
    for medication in medSorted:
        if medication['display'] not in medicationsDict.keys():
            medicationsDict[medication['display']] = [[], []]
        
        if (medication['doseQuantity'] != "N/A"):
            if (medication['dateWritten'][:-6] != ''):
                medicationsDict[medication['display']][0].append( datetime.datetime.strptime(medication['dateWritten'][:-6], "%Y-%m-%dT%H:%M:%S").strftime("%d, %b %Y") )
                medicationsDict[medication['display']][1].append(medication['doseQuantity'][u'value'])
#         else:
#             medicationsDict[medication['display']][0].append(medication['dateWritten'])
#             medicationsDict[medication['display']][1].append(0)
    for k in medicationsDict.keys():
        if (len (medicationsDict[k][0]) <2): #remove entries with less than 2 data points
            del medicationsDict[k]         
        
        
    patientDict = {"pid": pid, "name": name, "conditions": condList, "observations": observationsDict, "medications": medicationsDict}           
    
    return patientDict


#def buildJS(data1List, data2List, labelsList, randomNo):
def buildJS(pid, patientDict, randomNo):
    
    medicationMappingList = []
    observationMappingList = []
    
    '''
    DELETE STRAY FILES
    '''
    files = glob.glob(os.path.join(BASE_DIR, 'static/dist/js/pages/tempJSDashboard/*')) #Delete stray files
    for f in files:
        os.remove(f)
    '''
    OPEN FILE TO BE WRITTEN
    '''
    with open(os.path.join(BASE_DIR, 'static/dist/js/pages/tempJSDashboard/dashboard2') + "" + str(randomNo) + ".js", "w") as JSFile: 
        '''
        WRITE HEADER PART DUMP
        '''
        with open(os.path.join(BASE_DIR, 'static/dist/js/pages/dashboard_1.txt'), "r") as file1:
                    for line in file1:
                        JSFile.write(line + "\n")
        
        
        chartCounter = -1 # ABSOLUTE CHART COUNTER
        
        '''
        GENERATE MEDICATION CHARTS
        '''
        for medicationName in patientDict[pid]['medications'].keys():
            chartCounter+=1    
            medicationGraphData = patientDict[pid]['medications'][medicationName]
            
            chardID = "salesChart" + str(chartCounter)
            medicationMappingList.append([str(medicationName), chardID])
            
            JSFile.write("\n var salesChartCanvas = $(\"#" + chardID + "\").get(0).getContext(\"2d\");" + "\n"
                         "// This will get the first returned node in the jQuery collection." + "\n" + 
                         "var salesChart = new Chart(salesChartCanvas);" + "\n" +
                        "var salesChartData = { " + "\n" + "labels: "  + str(medicationGraphData[0]) + ",\n" 
                        '''datasets: [
                          {
                            label: "Electronics",
                            fillColor: "rgb(210, 214, 222)",
                            strokeColor: "rgb(210, 214, 222)",
                            pointColor: "rgb(210, 214, 222)",
                            pointStrokeColor: "#c1c7d1",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgb(220,220,220)",
                            data: ''' + str(medicationGraphData[1]) + 
                    
                          ''' },
                          {
                            label: "Digital Goods",
                            fillColor: "rgba(60,141,188,0.9)",
                            strokeColor: "rgba(60,141,188,0.8)",
                            pointColor: "#3b8bba",
                            pointStrokeColor: "rgba(60,141,188,1)",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgba(60,141,188,1)",
                            data: ''' + str(medicationGraphData[1]) + '''
                          }
                        ]
                      };'''  + "\n\n")
            
            '''
            WRITE CHART'S END
            '''
            with open(os.path.join(BASE_DIR, 'static/dist/js/pages/dashboard_2.txt'), "r") as file2:
                for line in file2:
                    JSFile.write(line + "\n") 
            
            JSFile.write("\n\n")
        '''
        GENERATE OBSERVATION CHARTS
        '''
        for observationName in patientDict[pid]['observations'].keys():
            chartCounter+=1    
            observationGraphData = patientDict[pid]['observations'][observationName]
            
            chardID = "salesChart" + str(chartCounter)
            observationMappingList.append([str(observationName), chardID, observationGraphData[1][-1], observationGraphData[0][-1]])
            
            JSFile.write("\n var salesChartCanvas = $(\"#" + chardID + "\").get(0).getContext(\"2d\");" + "\n"
                         "// This will get the first returned node in the jQuery collection." + "\n" + 
                         "var salesChart = new Chart(salesChartCanvas);" + "\n" +
                        "var salesChartData = { " + "\n" + "labels: "  + str(observationGraphData[0]) + ",\n" 
                        '''datasets: [
                          {
                            label: "Electronics",
                            fillColor: "rgb(210, 214, 222)",
                            strokeColor: "rgb(210, 214, 222)",
                            pointColor: "rgb(210, 214, 222)",
                            pointStrokeColor: "#c1c7d1",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgb(220,220,220)",
                            data:''' + str(observationGraphData[1]) + 
                    
                          '''},
                          {
                            label: "Digital Goods",
                            fillColor: "rgba(60,141,188,0.9)",
                            strokeColor: "rgba(60,141,188,0.8)",
                            pointColor: "#3b8bba",
                            pointStrokeColor: "rgba(60,141,188,1)",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgba(60,141,188,1)",
                            data: ''' + str(observationGraphData[1]) + '''
                          }
                        ]
                      };'''  + "\n\n")
            
            '''
            WRITE CHART'S END
            '''
            with open(os.path.join(BASE_DIR, 'static/dist/js/pages/dashboard_2.txt'), "r") as file2:
                for line in file2:
                    JSFile.write(line + "\n") 
            
            JSFile.write("\n\n")            
                    
        
        '''
        WHOLE FILE END
        '''
        JSFile.write("});") #end file
            
        return (medicationMappingList, observationMappingList)
    
        
def nameSearch (name):
    name = name.lower()
    with open(os.path.join(BASE_DIR, 'NameSearchMappings/firstName.json'), 'r') as fistNameFile:
        with open(os.path.join(BASE_DIR, 'NameSearchMappings/lastName.json'), 'r') as lastNameFile:
            with open(os.path.join(BASE_DIR, 'NameSearchMappings/fullName.json'), 'r') as fullNameFile:
                for line in fistNameFile:
                    firstNameData = json.loads(line)
                for line in lastNameFile:
                    lastNameData = json.loads(line)
                for line in fullNameFile:
                    fullNameData = json.loads(line)
    
    if (name in [k.lower() for k in fullNameData]):
        return dict((k.lower(),v) for k,v in fullNameData.items())[name][0]
    elif (name in [k.lower() for k in firstNameData]):
        return dict((k.lower(),v) for k,v in firstNameData.items())[name][0]
    elif (name in [k.lower() for k in lastNameData]):
        return dict((k.lower(),v) for k,v in lastNameData.items())[name][0]
    else:
        return "N/A"
    
    
def getFullNameByID(pid):
    current_url = "https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/" + pid + "?_format=json"
    response = urllib2.urlopen(current_url)
    data = json.loads( response.read() )
    
    first_name = data['name'][0]['given'][0]
    last_name = data['name'][0]['family'][0]

    return first_name + " " + last_name



def appendtoDict (patients_dict):
    #print patients_dict
    
    reason_dictionary_list = [{'reason': "General Checkup", 'color': "green"},
                              {'reason': "Follow-up", 'color': "yellow"},
                              {'reason': "Consultation", 'color': "aqua"},
                              {'reason': "Urgent Visit", 'color': "red"},
                              {'reason': "Work Related", 'color': "purple"}
                              ]

    return_dict = {}
    #Meeting Tme Stuff
    now = datetime.datetime.now()
    i=0
    for k, patient_dict in patients_dict:
        temp_dict = patient_dict

        random_no = randint(0,len(reason_dictionary_list)-1)
        temp_dict['reason'] = reason_dictionary_list[random_no]['reason']
        temp_dict['color'] = reason_dictionary_list[random_no]['color']
        temp_dict['meeting_time'] = now + datetime.timedelta(minutes = i*15)
        i+=1
        
        return_dict[k] = temp_dict
     
    return return_dict 








'''
        DIRTY FUNCTION
'''

def take(n, iterable):
    "Return first n items of the iterable as a list"
    return list(islice(iterable, n))

def getPatients(count):
    
#     final_dict = getDummyData()
#     return take(count, final_dict.iteritems()) 
    
    final_dict = {}
    patient_dict = {}
    # print count

    # dict = {}
    # print len(dict)
    current_url = "https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient?_format=json"
    
    while (len(patient_dict)<count):
        
        # headers = response.info()
        response = urllib2.urlopen(current_url)
        data = json.loads( response.read() )
        
        #print data['link'][1]['rel']
        
        for field in data['entry']:
            # print field
            first_name = field['content']['name'][0]['given'][0]
            last_name = field['content']['name'][0]['family'][0]
            name = first_name + " "  + last_name
                        
            pid = field['content']['identifier'][0]['value']
            
            # print len(dict)
            if (len(patient_dict)<count):
                dict = {"pid": pid, "name": name}
#                 obs = get_patient_observations_by_id(pid)
#                 cond = get_patient_conditions_by_id(pid)
#                 med = get_patient_medications_by_id(pid)

                #print name
               # dict = {"pid": pid, "name": name, "conditions": cond, "observations": obs, "medications": med}
                dict = {"pid": pid, "name": name}
                # print obs[0]
                # print dict
                # dict[name] = pid
                patient_dict[pid] = dict
                # print patientlist
                # print ("Name: " + name + ", PID: " + pid )
        
        flag = 0 # GET NEXT URL
        for link in data['link']:
            if (link['rel'] == "next"):
                next_url = link['href']
                flag = 1
        if (flag == 0): # next URL not found
            break 
        
        current_url = next_url
      
    for pid in patient_dict.keys():
       dict = patient_dict[pid] 
       obs = get_patient_observations_by_id(pid)
       cond = get_patient_conditions_by_id(pid)
       med = get_patient_medications_by_id(pid)         
       dict['conditions'] = cond
       dict['observations'] = obs
       dict['medications'] = med 
    
        
    return take(count, patient_dict.iteritems()) 
