#include <stdio.h>

void checkPrimeNumber() {
    int n;
    printf("Enter the number: = ");
    scanf("%d", &n);

    if (n <= 1) {
        printf("Output: Not Prime\n");
        return;
    }

    int isPrime = 1;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            isPrime = 0;
            break;
        }
    }

    if (isPrime)
        printf("Output: Prime\n");
    else
        printf("Output: Not Prime\n");
}

int main() {
    checkPrimeNumber();
    return 0;
}
