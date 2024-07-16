package Java_Review.실전코딩.Class3;

public class Car {
    private int speed;
    private String color;
    private int history;

    public Car() {
    }

    public Car(int speed, String color, int history) {
        this.speed = speed;
        this.color = color;
        this.history = history;
    }

    int getSpeed() {
        return this.speed;
    }

    void setSpeed(int speed) {
        this.speed = speed;
    }

    void speedUp(int speed) {
        this.speed += speed;
    }

    @Override
    public String toString() {
        return "Speed: " + this.speed + "\nColor: " + this.color + "\nHistory: " + this.history;
    }

}