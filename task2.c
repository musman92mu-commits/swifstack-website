#include <stdio.h>

int main() {
    float a, b, c;

    printf("Enter length of side 1: ");
    scanf("%f", &a);
    printf("Enter length of side 2: ");
    scanf("%f", &b);
    printf("Enter length of side 3: ");
    scanf("%f", &c);

    if (a <= 0 || b <= 0 || c <= 0) {
        printf("Invalid sides. Sides must be positive.\n");
        return 1;
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
        printf("Not a valid triangle.\n");
    } else {
        printf("Valid triangle. ");
        if (a == b && b == c) {
            printf("It is Equilateral.\n");
        } else if (a == b || b == c || a == c) {
            printf("It is Isosceles.\n");
        } else {
            printf("It is Scalene.\n");
        }
    }

    return 0;
}
