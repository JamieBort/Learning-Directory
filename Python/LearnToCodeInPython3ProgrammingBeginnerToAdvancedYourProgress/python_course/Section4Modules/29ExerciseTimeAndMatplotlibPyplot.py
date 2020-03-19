# This is from /LearningDirectory/Python/LearnToCodeInPython3ProgrammingBeginnerToAdvancedYourProgress/python_course/Section4Modules/27Time.py
# import time as t
# print("t.localtime(): ", t.localtime())
# time_now = t.localtime()
# print("Transaction completed at: ", str(time_now.tm_hour) + "h:" + str(time_now.tm_min) + "m" )
# time_now = t.time()
# print("Number of seconds since the begining of the epoc: 0 seconds 0 minutes 0 hours January 1, 1970: ", time_now)
# nsiad = 60*60*24 # number of seconds in a day
# delivery_time = time_now + (nsiad + 7)
# print(t.localtime(delivery_time))
# print("Before")
# # print(t.sleep(5))
# # t.sleep(5)
# print("After")

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

# Exercise:
# Create a program to help the user type faster. 
# Give them a word and ask them to write it five times.
# Check how many seconds it took them to type the word at each round.
# In the end, tell the user how many mistakes were made.
# And show a chart with the typing speed evolution during the 5 rounds.