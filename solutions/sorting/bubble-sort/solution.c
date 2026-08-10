#include <stdio.h>

void bubble_sort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int swapped = 0;

        for (int j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                int tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                swapped = 1;
            }
        }

        if (!swapped) {
            break;
        }
    }
}

void print_array(int arr[], int n) {
    printf("[");
    for (int i = 0; i < n; i++) {
        printf("%d%s", arr[i], i < n - 1 ? ", " : "");
    }
    printf("]\n");
}

int main(void) {
    int arr[] = {5, 2, 9, 1, 5, 6};
    int n = sizeof(arr) / sizeof(arr[0]);

    printf("Before: ");
    print_array(arr, n);

    bubble_sort(arr, n);

    printf("After:  ");
    print_array(arr, n);

    return 0;
}
