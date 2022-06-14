
def fibonacci(max_n):
    n, prev = 1, 1
    while n <= max_n:
        yield n
        n, prev = n + prev, n

def lambda_handler(event, context):
    print(event)
    total = sum(n for n in fibonacci(event["value"]) if n % 2 == 0)
    return total

    7