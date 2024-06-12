import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class P10818 {
    public static void main(String[] args) {

        P10818 main = new P10818();
        main.run();
    }

    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    void run() {
        int count = 0;
        try {
            count = Integer.parseInt(br.readLine());
        } catch (NumberFormatException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        String temp = "";
        try {
            temp = br.readLine();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        int[] data = new int[count];
        int max = -1000000;
        int min = 1000000;

        String[] temps = temp.split(" ");

        for (int i = 0; i < count; i++) {
            data[i] = Integer.parseInt(temps[i]);
        }

        for (int i = 0; i < count; i++) {
            max = Math.max(max, data[i]);
            min = Math.min(min, data[i]);
        }

        System.out.println(min + " " + max);
    }
}
