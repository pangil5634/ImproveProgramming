#include <stdio.h>
int count0 = 0;
int count1 = 0;

// 피보나치 함수
int fibonacci(int n)
{
    if (n == 0)
    {
        // printf("0");
        count0++;
        return 0;
    }
    else if (n == 1)
    {
        // printf("1");
        count1++;
        return 1;
    }
    else
    {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// 메인 함수
int main(void)
{

    int T = 0;
    scanf("%d", &T);

    // [방식1] 재귀함수 사용
    // for (int i = 0; i < T; i++)
    // {
    //     int number = 0;
    //     scanf("%d", &number);
    //     fibonacci(number);
    //     printf("%d %d\n", count0, count1);
    //     count0 = 0;
    //     count1 = 0;
    // }

    // [방식2] 피보나치 원리 사용

    // 변수 선언
    int fibonacci[41][2];

    // 변수 할당 (0, 1)
    // 0 -> 0의 개수 1, 1의 개수 0
    fibonacci[0][0] = 1;
    fibonacci[0][1] = 0;
    // 1 -> 0의 개수 0, 1의 개수 1
    fibonacci[1][0] = 0;
    fibonacci[1][1] = 1;

    // 변수 할당 (나머지)
    for (int i = 2; i <= 40; i++)
    {
        fibonacci[i][0] = fibonacci[i - 1][0] + fibonacci[i - 2][0];
        fibonacci[i][1] = fibonacci[i - 1][1] + fibonacci[i - 2][1];
    }

    // 입력된 값에 대한 결과 출력
    while (T--)
    {
        int number = 0;
        scanf("%d", &number);
        printf("%d %d\n", fibonacci[number][0], fibonacci[number][1]);
    }

    return 0;
}