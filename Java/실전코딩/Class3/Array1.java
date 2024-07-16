package Java.실전코딩.Class3;

public class Array1 {
    public static void main(String[] args) {
        Array1 a1 = new Array1();
        // a1.case1();
        a1.case2();
    }

    public void case1() {
        // 정상적인 선언
        int[] numbers = new int[6];
        // 비정상적인 선언
        // int numbers[5];

        for (int i = 0; i < numbers.length; i++) {
            numbers[i] = i;
            System.out.println(numbers[i]);
        }
    }

    public void case2() {
        int[] numbers = { 10, 20, 30 };

        for (int i = 0; i < numbers.length; i++) {
            System.out.println(numbers[i]);
        }
    }
}