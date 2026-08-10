#include <stdio.h>

int binary_search(int arr[], int n, int target) {
    int low = 0;
    int high = n - 1;

    while (low <= high) {
        int mid = low + (high - low) / 2;

        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

int main(void) {
    int arr[] = {1, 3, 5, 7, 9, 11, 13, 15};
    int n = sizeof(arr) / sizeof(arr[0]);
    int tests[] = {7, 1, 15, 4};
    int num_tests = sizeof(tests) / sizeof(tests[0]);

    for (int i = 0; i < num_tests; i++) {
        int index = binary_search(arr, n, tests[i]);
        if (index != -1) {
            printf("%d found at index %d\n", tests[i], index);
        } else {
            printf("%d not found\n", tests[i]);
        }
    }

    return 0;
}
