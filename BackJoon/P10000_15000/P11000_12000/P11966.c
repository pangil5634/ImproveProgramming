/*
    [ 문제 ]
    자연수 N이 주어졌을 때, 2의 제곱수면 1을 아니면 0을 출력하는 프로그램을 작성하시오.
*/
#include <stdio.h>

int main(void)
{
    int num = 0;
    scanf("%d", &num);

    if (num == 0)
        printf("0");
    else if ((num & num - 1) == 0)
        printf("1");
    else
        printf("0");
    return 0;
}