#include <stdio.h>
#include <stdlib.h>

void merge(int arr[], int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;

    int *left_half = malloc(n1 * sizeof(int));
    int *right_half = malloc(n2 * sizeof(int));

    for (int i = 0; i < n1; i++) {
        left_half[i] = arr[left + i];
    }
    for (int j = 0; j < n2; j++) {
        right_half[j] = arr[mid + 1 + j];
    }

    int i = 0;
    int j = 0;
    int k = left;

    while (i < n1 && j < n2) {
        if (left_half[i] <= right_half[j]) {
            arr[k++] = left_half[i++];
        } else {
            arr[k++] = right_half[j++];
        }
    }

    while (i < n1) {
        arr[k++] = left_half[i++];
    }
    while (j < n2) {
        arr[k++] = right_half[j++];
    }

    free(left_half);
    free(right_half);
}

void merge_sort(int arr[], int left, int right) {
    if (left >= right) {
        return;
    }

    int mid = left + (right - left) / 2;

    merge_sort(arr, left, mid);
    merge_sort(arr, mid + 1, right);
    merge(arr, left, mid, right);
}

void print_array(int arr[], int n) {
    printf("[");
    for (int i = 0; i < n; i++) {
        printf("%d%s", arr[i], i < n - 1 ? ", " : "");
    }
    printf("]\n");
}

int main(void) {
    int arr[] = {38, 27, 43, 3, 9, 82, 10};
    int n = sizeof(arr) / sizeof(arr[0]);

    printf("Before: ");
    print_array(arr, n);

    merge_sort(arr, 0, n - 1);

    printf("After:  ");
    print_array(arr, n);

    return 0;
}
