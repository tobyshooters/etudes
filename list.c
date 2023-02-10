#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int* data;
    int len;
    int max;
} List;

List* create() {
    List* l = malloc(sizeof(List));
    l->len = 0;
    l->max = 1;
    l->data = malloc(sizeof(int) * l->max);
    return l;
}

void append(List* l, int i) {
    if (l->len == l->max) {
        l->max *= 2;
        l->data = realloc(l->data, sizeof(int) * l->max);
    }
    l->data[l->len++] = i;
}

void print(List* l) {
    printf("[");
    for (int i = 0; i < l->max; i++) {
        printf("%d, ", l->data[i]);
    }
    printf("]\n");
}

void destruct(List *l) {
    free(l->data);
    free(l);
}

int main(int argc, char* argv) {
    List* l = create();

    append(l, 11);
    append(l, 12);
    append(l, 13);
    print(l);

    append(l, 14);
    append(l, 15);
    print(l);

    destruct(l);
    return 0;
}
