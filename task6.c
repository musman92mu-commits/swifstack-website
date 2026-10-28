#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int main(int argc, char **argv) {
    if (argc < 2) {
        printf("Usage: %s <num1> <num2> ...\n", argv[0]);
        return 1;
    }

    int count = argc - 1;
    int *arr = (int *)malloc(count * sizeof(int));
    if (!arr) {
        printf("Memory allocation failed.\n");
        return 1;
    }

    for (int i = 0; i < count; i++) {
        arr[i] = atoi(argv[i + 1]);
    }

    int min1 = INT_MAX, min2 = INT_MAX;
    for (int i = 0; i < count; i++) {
        if (arr[i] < min1) {
            min2 = min1;
            min1 = arr[i];
        } else if (arr[i] < min2 && arr[i] != min1) {
            min2 = arr[i];
        }
    }

    if (min2 == INT_MAX) {
        printf("Not enough distinct elements.\n");
    } else {
        printf("Output: %d\n", min2);
    }

    free(arr);
    return 0;
}
