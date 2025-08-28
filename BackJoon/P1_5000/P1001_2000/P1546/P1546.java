package P1546;

import java.util.Scanner;

public class P1546 {
    public static void main(String[] args) {
        P1546 main = new P1546();

        main.run();
    }

    Scanner sc = new Scanner(System.in);

    int count = 0; // 과목 수
    int max = 0; // 최고점
    int total = 0; // 합계
    double avg = 0; // 평균

    void run() {
        getCount();
        getNumber();
        getAvg();
        printResult();

    }

    void getCount() {
        count = sc.nextInt();
    }

    void getNumber() {
        int[] numbers = new int[count];

        for (int i = 0; i < numbers.length; i++) {
            numbers[i] = sc.nextInt();
            total += numbers[i];
            if (numbers[i] > max)
                max = numbers[i];
        }

    }

    void getAvg() {
        avg = (double) total / count;
    }

    void printResult() {
        System.out.println((double) avg / max * 100);
    }
}
