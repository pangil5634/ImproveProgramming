package Java.실전코딩.Class3;

public class ForEach {
    public static void main(String[] args) {
        ForEach foreach = new ForEach();
        // foreach.case1();
        foreach.case2();

    }

    public void case1() {
        int[] numbers = new int[5];
        for (int i = 0; i < numbers.length; i++)
            numbers[i] = (int) (Math.random() * 10);
        for (int value : numbers)
            System.out.println(value);
    }

    public void case2() {
        String[] str = { "Java", "C", "C++" };

        for (String s : str)
            System.out.println(s);
        ;
    }
}
