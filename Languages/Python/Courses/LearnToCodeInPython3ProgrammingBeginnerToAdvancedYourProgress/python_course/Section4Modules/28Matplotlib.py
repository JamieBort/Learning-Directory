# Matplotlib is an external module.
# External modules need to be installed.
# to install this matplotlib library type 'pip install matplotlib' in the commnand line.
# it was already installed. I didn't update it.

# we'll be using these libraries in later lessons:
# https://matplotlib.org/
# https://scikit-learn.org/stable/
# https://www.pygame.org/news
# https://www.scipy.org/
# https://www.sqlalchemy.org/
# https://wxpython.org/
# https://requests.readthedocs.io/en/master/

import matplotlib.pyplot as plt
x = [1,2,3,4]
y = [1500,1200,1100,1800]
legend = ["January", "February", "March", "April"]
plt.xticks(x,legend)
plt.bar(x,y)
plt.ylabel("Sales in US$")
plt.title("Monthly Sales")
plt.plot(x,y)
plt.show()