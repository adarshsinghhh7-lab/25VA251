public class Demo {
    String name;
    int age;
    public Demo(String name, int age) {
        this.name = name;
        this.age = age;
    }
    public void display() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        Demo demo = new Demo("Alice", 25);
        demo.display();
    }
}