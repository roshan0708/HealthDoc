from django.shortcuts import render
from django.http import JsonResponse

import json
import pandas as pd
import joblib

heartModel = joblib.load('heart_model.pkl')
# liverModel = joblib.load('liver_model.pkl')
# kidneyModel = joblib.load('kidney_model.pkl')


def predictHeart(request):
    data = json.loads(request.body)
    dataF = pd.DataFrame({'x': data}).transpose()
    score = heartModel.predict(dataF)[0]
    print(score)
    score = float(score)
    return JsonResponse({'score': score})


# def predictLiver(request):
#     data = json.loads(request.body)
#     dataF = pd.DataFrame({'x': data}).transpose()
#     print(dataF)
#     score = liverModel.predict(dataF)
#     print(score)
#     score = float(score)
#     return JsonResponse({'score': score})


# def predictKidney(request):
#     data = json.loads(request.body)
#     dataF = pd.DataFrame({'x': data}).transpose()
#     score = kidneyModel.predict(dataF)
#     print(score)
#     score = float(score)
#     return JsonResponse({'score': score})
