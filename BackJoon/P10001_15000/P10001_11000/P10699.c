#include <stdio.h>
#include <time.h>

int main(void)
{

    time_t timer;
    struct tm *t;

    timer = time(NULL);
    t = localtime(&timer);

    if (t->tm_mon + 1 < 10)
        printf("%d-0%d-%d\n", t->tm_year + 1900, t->tm_mon + 1, t->tm_mday);
    else
        printf("%d-%d-%d\n", t->tm_year + 1900, t->tm_mon + 1, t->tm_mday);
    return 0;
}