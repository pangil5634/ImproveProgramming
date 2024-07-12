#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main(void)
{
    // 변수 선언
    int numberType;           // N진수
    char input[32];           // 표현한 수
    long len = strlen(input); // 표현한 수의 길이
    long len2 = len - 1;      // 차수 계산을 위한 변수 (ex. 2 -> 2승)
    long total = 0;           // 총합 (10진수로)
    long size = 0;            // 10진수로 표현한 변수 (ex. 'A' -> 10)
    long degree = 1;          // 계산된 차수의 크기

    // 입력 받기
    scanf("%s %d", input, &numberType);

    // 결과 계산
    for (long i = 0; i < len; i++)
    {

        // 대문자로 변형
        if (input[i] > 57)
        {
            size = toupper(input[i]) - 65 + 10;
        }
        else
        {
            size = input[i] - 48;
        }

        // 차수에 필요한 값 계산
        for (long j = 0; j < len2; j++)
        {
            degree *= numberType;
        }
        total += degree * size;
        len2--; // 차수 감소
    }

    // 결과 출력
    printf("%ld\n", total);
    return 0;
}