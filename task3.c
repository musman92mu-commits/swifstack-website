#include <stdio.h>

int main() {
    int arr[20];
    int original[20];
    int count = 0;
    int num;

    printf("Enter up to 20 integers (-99 to stop):\n");

    while (count < 20) {
        scanf("%d", &num);
        if (num == -99) break;
        arr[count] = num;
        original[count] = num;
        count++;
    }

    if (count == 0) {
        printf("No numbers entered.\n");
        return 1;
    }

    printf("The entered sequence is: ");
    for (int i = 0; i < count; i++) {
        printf("%d ", original[i]);
    }
    printf("\n");

    for (int i = 0; i < count - 1; i++) {
        for (int j = 0; j < count - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    printf("Updated sequence is: ");
    for (int i = 0; i < count; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");

    return 0;
}
