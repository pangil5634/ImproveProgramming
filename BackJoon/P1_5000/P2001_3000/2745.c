#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main(void)
{
    int numberType;
    char input[32];

    scanf("%s %d", input, &numberType);

    long len = strlen(input);
    long len2 = len - 1;
    long total = 0;
    long size = 0;

    for (long i = 0; i < len; i++)
    {

        if (input[i] > 57)
        {
            size = toupper(input[i]) - 65 + 10;
        }
        else
        {
            size = input[i] - 48;
        }
        long temp = 1;
        for (long j = 0; j < len2; j++)
        {
            temp *= numberType;
        }
        total += temp * size;
        len2--;
    }

    printf("%ld\n", total);

    // printf("%s %d\n", input, numberType);
    return 0;
}