package Java.실전코딩.Class3;

import java.util.Scanner;

public class Array2 {
    public static void main(String[] args) {
        Array2 array2 = new Array2();

        array2.case1();

    }

    public void case1() {
        int size;
        Scanner sc = new Scanner(System.in);

        System.out.print("배열의 크기를 입력하세요 : ");
        size = sc.nextInt();

        int[] scores = new int[size];

        for (int i = 0; i < size; i++) {
            System.out.print(i + 1 + "번째 성적을 입력하세요 : ");
            scores[i] = sc.nextInt();
        }

        System.out.println();
        System.out.println("[ 결과 1 ]");

        // case1
        // for (int i = 0; i < size; i++) {
        // System.out.println("[" + (i + 1) + "] " + scores[i]);
        // }

        // case2
        printArray(scores);

        System.out.println();
        System.out.println("[ 결과 2]");
        printArray(addOne(scores));
        sc.close();
    }

    public void printArray(int[] array) {
        int i = 1;
        for (int value : array) {
            System.out.println("[" + (i++) + "] " + value);
        }
    }

    public int[] addOne(int[] array) {
        for (int i = 0; i < array.length; i++) {
            array[i] = array[i] + 1;
        }

        return array;
    }
}
