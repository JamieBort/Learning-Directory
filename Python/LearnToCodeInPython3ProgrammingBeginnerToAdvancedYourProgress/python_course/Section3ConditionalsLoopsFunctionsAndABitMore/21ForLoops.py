# Followed along with the video.

blog_posts = ["", "The title of my first post", "", "The title of my second post", "the title of my third post"]
for post in blog_posts:
    if post == "":
        continue
    print(post)

print("-----------------------------")

myString = "this is a string"
for char in myString:
    print(char)

print("-----------------------------")

for x in range(0,10):
    print(x)

print("-----------------------------")

person = {"Name": "Karen Smith", "Age": 25, "Gender": "female"}
for key in person:
    print(key, "\t:", person[key])

print("-----------------------------")

blog_posts = {
    "Python" : 
        ["The title of my first post", "The title of my second post", "The title of my third post"],
    "JavaScript" : 
        ["The title of my fourth post", "The title of my fifth post", "The title of my sixth post"]
        }

for category in blog_posts:
    print("Posts about: ", category)
    for post in blog_posts[category]:
        print(post)
