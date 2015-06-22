#MY IMPORTS
import urllib2, string
import json
from itertools import islice
from random import randint
import random
import logging


# Create your views here.

from django.shortcuts import render_to_response, RequestContext, HttpResponse, Http404, render
import datetime
from django.template import Template, Context
from my_app.models import Publisher

from DataDump import *
from functionDump import *

from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from my_app.serializers import PublisherSerializer
# Create your views here.



#############HIT Functions


def take(n, iterable):
    "Return first n items of the iterable as a list"
    return list(islice(iterable, n))




##########################



#############HIT VIEWS

def PCPView(request):
    final_dict = {}
    
    patients_dict = appendtoDict( getPatients(10) )
    final_dict['patients_dict'] = patients_dict
    
    
    
    return render(request, 'Admin-master/HIT_pages/pcpview.html', final_dict)



def PatientView(request):
    
    requested_pid = request.GET['pid']
    requested_name = request.GET['name']
    requested_query = request.GET['query']
    
    requested_queryID = nameSearch(requested_query)
    logging.warning(requested_query)
    
    if (requested_queryID == 'N/A'):
        return render(request, 'Admin-master/HIT_pages/patientviewnotfound.html', {})
    else:
        
        if (requested_name != 'dummy' or requested_queryID != 'N/A'):
                
        
            if (requested_query == 'dummy'): #NormalClick
                finalPID = requested_pid
            else:                            #SearchClick
                finalPID = requested_queryID
            patientDict = getPatientByID(finalPID, requested_name)         
    
            randomNo = random.random()
            (medicationMappingList, observationMappingList) = buildJS(finalPID, patientDict, randomNo)
            
    #         logging.warning(medicationMappingList)
    #         logging.warning(observationMappingList) 
            
            returnDict = {}
            returnDict['randomNo'] = randomNo
            returnDict['name'] = getFullNameByID(finalPID)
            returnDict['medicationMappingList'] = medicationMappingList
            returnDict['observationMappingList'] = observationMappingList
            returnDict['conditionsList'] = patientDict[finalPID]['conditions']
            
            
        #     #patient_dict = appendtoDict( getPatientByID(requested_pid, requested_name) )
        #     patient_dict = ( getPatientByID(requested_pid, requested_name) )
        #     patient_dict[requested_pid]['randomNo'] = randomNo
        #     
        #     print patient_dict[requested_pid]
            finalDict = {}
            finalDict['patient_dict'] = returnDict
                    
            return render(request, 'Admin-master/HIT_pages/patientview.html', finalDict)
        
        
        else:
            return render(request, 'Admin-master/HIT_pages/patientviewnotfound.html', {})



##########################




















































def my_view(request, offset, offset2):
    #return render_to_response('index.html', locals(), context_instance=RequestContext(request))
    
#     try:
#         print offset
#         print offset2
#     except ValueError:
#         raise Http404()
#     dt = datetime.datetime.now() + datetime.timedelta(hours=int(offset))
#     #assert False
#     html = "<html><body>It is now %s.</body></html>" %datetime.datetime.now()
#     return HttpResponse(html + offset + offset2 + str(dt))



    dictionary = {'Name': 'Saajan', 'Age': '23', 'Subjects': ["AI", "ML", "SOC"]}
    
    t = Template('index.html')
    c = Context({'dict': dictionary})
    
    #return render_to_response('index.html', locals(), context_instance=c)
    #return render(request, 'index.html', dictionary)
    return render(request, 'search_form.html', dictionary)
    
    
# def search(request):
#     if 'q' in request.GET and request.GET['q']:
#         q = request.GET['q']
#         publishers = Publisher.objects.filter(name__icontains=q)
#         return render(request, 'search_results.html',
#             {'books': publishers, 'query': q})
#     else:
#         if 'q' not in request.GET:
#             error = False
#         else:
#             error=True
#         return render(request, 'search_form.html', {'error': error})
#     
#     
#     
# # REST API    
#     
# @api_view(['GET', 'POST'])
# def publisher_collection(request):
#     if request.method == 'GET':
#         posts = Publisher.objects.all()
#         serializer = PublisherSerializer(posts, many=True)
#         return HttpResponse(serializer.data)
#     elif request.method == 'POST':
#         data = {'text': request.DATA.get('the_post'), 'author': request.user.pk}
#         serializer = PublisherSerializer(data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#     
# @api_view(['GET'])
# def publisher_element(request, id):
#     try:
#         post = Publisher.objects.get(id=id)
#     except Publisher.DoesNotExist:
#         return HttpResponse(status=404)
# 
#     if request.method == 'GET':
#         serializer = PublisherSerializer(post)
#         return Response(serializer.data)    
# 
# 
# 
# def dummy_my_view(request):
#     
#     final_dict = {}
#     
#     patients_list = appendtoDict( getPatients(50) )
#     final_dict['patients_list'] = patients_list
#     
#     
#     return render(request, 'Admin-master/index.html', final_dict)














####################DUMMY DATA

    