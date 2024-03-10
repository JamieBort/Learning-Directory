import time as t
print("t.localtime(): ", t.localtime())
time_now = t.localtime()
print("Transaction completed at: ", str(time_now.tm_hour) + "h:" + str(time_now.tm_min) + "m" )
time_now = t.time()
print("Number of seconds since the begining of the epoc: 0 seconds 0 minutes 0 hours January 1, 1970: ", time_now)
nsiad = 60*60*24 # number of seconds in a day
delivery_time = time_now + (nsiad + 7)
print(t.localtime(delivery_time))
print("Before")
# print(t.sleep(5))
# t.sleep(5)
print("After")