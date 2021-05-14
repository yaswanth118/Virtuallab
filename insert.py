#
#
#   This file is commented intentionally due to the extra packages needed to be installed during deployment.
#
#
# import pymysql, json
#
# # read JSON file which is in the next parent folder
# file = 'D:/Virtual Labs/static/data.json'
# # file = os.path.abspath('../../..') + "/test.json"
# json_data = open(file).read()
# json_obj = json.loads(json_data)
#
#
# # do validation and checks before insert
# def validate_string(val):
#     if val != None:
#         if type(val) is int:
#             # for x in val:
#             #   print(x)
#             return str(val).encode('utf-8')
#         else:
#             return val
#
#
# # connect to MySQL
# con = pymysql.connect(host='remotemysql.com', user='nU0amtc0De', passwd='OOP4GV0SII', db='nU0amtc0De')
# cursor = con.cursor()
#
# # parse json data to SQL insert
# for i, item in enumerate(json_obj):
#     question = validate_string(item.get("question", None))
#     op1 = validate_string(item.get("op1", None))
#     op2 = validate_string(item.get("op2", None))
#     op3 = validate_string(item.get("op3", None))
#     op4 = validate_string(item.get("op4", None))
#     correct = validate_string(item.get("correct", None))
#
#     cursor.execute("INSERT INTO questions (question,op1,op2,op3,op4,correct) VALUES (%s,%s,	%s,%s,%s,%s)",
#                    (question, op1, op2, op3, op4, correct))
# con.commit()
# con.close()
