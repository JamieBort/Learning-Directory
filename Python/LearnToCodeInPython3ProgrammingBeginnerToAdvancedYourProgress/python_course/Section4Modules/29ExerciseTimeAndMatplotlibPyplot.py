# This is from /LearningDirectory/Python/LearnToCodeInPython3ProgrammingBeginnerToAdvancedYourProgress/python_course/Section4Modules/27Time.py
# import time as t
# print("THE OUTPUT OF t.localtime(): ", t.localtime()) # THE OUTPUT OF t.localtime(): time.struct_time(tm_year=2020, tm_mon=3, tm_mday=19, tm_hour=13, tm_min=36, tm_sec=36, tm_wday=3, tm_yday=79, tm_isdst=1)

# current_time = t.localtime()
# print("THE TYPE OF tm_hour: ", type(t.localtime().tm_hour).__name__)
# print("THE OUTPUT OF t.localtime().tm_hour AND t.localtime().tm_min: ", current_time.tm_hour, "h:", current_time.tm_min, "m")
# print("THE OUTPUT OF str(t.localtime().tm_hour) AND str(t.localtime().tm_min): ", str(current_time.tm_hour) + "h:" + str(current_time.tm_min) + "m" )

# since_beginning_of_time = t.time()
# print("NUMBER OF SECONDS SINCE THE BEGINNING OF THE EPOC, WHICH IS 0 SECONDS 0 MINUTES 0 HOURS JANUARY 1, 1970: ", since_beginning_of_time)
# nsiad = 60*60*24 # number of seconds in a day
# delivery_time = since_beginning_of_time + (nsiad * 7) # SEVEN DAYS FROM NOW
# print("THE TIME SEVEN DAYS FROM NOW: ", t.localtime(delivery_time))
# print("Before")
# # print(t.sleep(5)) # Suspend execution of the calling thread for the given number of seconds.
# # t.sleep(5) Suspend execution of the calling thread for the given number of seconds.
# print("After")
# ----------------------------------------

# This is from /LearningDirectory/Python/LearnToCodeInPython3ProgrammingBeginnerToAdvancedYourProgress/python_course/Section4Modules/28Matplotlib.py
# import matplotlib.pyplot as plt
# x = [1,2,3,4]
# y = [1500,1200,1100,1800]
# legend = ["January", "February", "March", "April"]
# plt.xticks(x,legend)
# plt.bar(x,y)
# plt.ylabel("Sales in US$")
# plt.title("Monthly Sales")
# plt.plot(x,y)
# plt.show()
# ----------------------------------------

# Exercise:
# Create a program to help the user type faster. 
# Give them a word and ask them to write it five times.
# Check how many seconds it took them to type the word at each round.
# In the end, tell the user how many mistakes were made.
# And show a chart with the typing speed evolution during the 5 rounds.

# Solution:
import time as t
dictionary = {} # declare dictionary.

# print("Please type the word 'run' five times.")
# time1 = input("")
# time2 = input("")
# time3 = input("")
# time4 = input("")
# time5 = input("")
# dictionary = {"first": time1,"second":time2, "third":time3, "fourth":time4, "fifth": time5}
# dictionary = {"first": time1}

# pr/int(dictionary)

def timeMeasure():
    since_beginning_of_time = t.time()
    print(since_beginning_of_time)
    return since_beginning_of_time

def measuringWordTime():
    beforeWordIsEntered=timeMeasure()
    word = input("")
    afterWordIsEntered=timeMeasure()
    print(afterWordIsEntered-beforeWordIsEntered)
    return word

def addToDictionary(theword):
    dictionary.update({"color": theword})
    print("The dictionary: ", dictionary)

# measuringWordTime()
addToDictionary(measuringWordTime())