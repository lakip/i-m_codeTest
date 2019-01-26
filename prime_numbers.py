class Prime:
    def prime_numbers(self):
        prime = []
        for num in range(1, 100):
            for i in range(2, num):
                if (num % i) == 0:
                    break
            else:
                prime.append(num)
        print(prime)


prime = Prime()
prime.prime_numbers()


