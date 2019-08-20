def double(callback):
    def result():
        callback()
        callback()
    return result

@double
def hi():
    print("Hi")

# Kind of like:
# hi = double(
#     def hi():
#         print("Hi")
# )

hi()
