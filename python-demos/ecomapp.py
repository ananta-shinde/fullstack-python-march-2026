

class CustomerManager:
    customerlist = []

    def addNewCustomer(self,customer):
        self.customerlist.append(customer)



# 1. addNewCustomer
# 2. updateCustomer
# 3. getAllCustomers
# 4. deleteCustomer
# 5. filterCustomers

class Customer:
    id = None
    name = None
    __email = None
    password = None
    profilePhoto = None

    def getEmail(self):
        return self.__email


    def __init__(self,name,email):
        self.name = name
        self.__email = email
        print("constructor was called")

    def printDetails(self):
        print("id:{}, name:{},email:{}".format(self.id,self.name,self.__email))

    def resetPassword(self,password):
        self.password = password


class Seller(Customer):
    super.__init__("Ananta","demo")
    pass





name = input("enter your name:")
email = input("enter your email")
c1 = Customer(name,email)

c1.password = input("enter your password")

print(c1.getEmail())



print(c1.printDetails())

cm = CustomerManager()
cm.addNewCustomer(c1)



