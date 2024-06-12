import java.util.Scanner;

class P11382 {
    long a, b, c;
    Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {
        P11382 main = new P11382();

        main.run();
    }

    void run() {

        getNumber();
        long result = a + b + c;
        System.out.println(result);
    }

    void getNumber() {
        a = sc.nextLong();
        b = sc.nextLong();
        c = sc.nextLong();
    }
}

// 기록
// 해당 문제는 int형이 아닌 long형을 사용해야 런타임에러가 나지 않는다.