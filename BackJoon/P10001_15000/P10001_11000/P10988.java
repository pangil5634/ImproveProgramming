import java.util.Scanner;

public class P10988 {
    public static void main(String[] args) {
        P10988 main = new P10988();

        main.run();
    }

    Scanner sc = new Scanner(System.in);

    void run() {
        String str = sc.nextLine();

        String[] strList = str.split("");
        int result = 1;

        for (int i = 0; i < strList.length; i++) {
            if (!strList[i].equals(strList[strList.length - (i + 1)])) {
                result = 0;
                break;
            }
        }
        System.out.println(result);
    }
}
