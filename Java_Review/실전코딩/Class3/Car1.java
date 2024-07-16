package Java_Review.실전코딩.Class3;

public class Car1 {
    public static void main(String[] args) {
        Car aCar = new Car();
        Car bCar = new Car(10, "red", 150000);

        int aCarSpeed = aCar.getSpeed();
        System.out.println("aCarSpeed : " + aCarSpeed);

        aCar.setSpeed(100);
        System.out.println("aCarSpeed : " + aCar.getSpeed());

        aCar = null;
        // System.out.println("aCarSpeed : " + aCar.speed);
        // System.out.println("aCar : " + aCar.toString());

        System.out.println("bCarSpeed : " + bCar.getSpeed());
        bCar.speedUp(10);
        System.out.println("bCarSpeed : " + bCar.getSpeed());
    }
}
