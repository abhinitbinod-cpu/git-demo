class RebaseTest{
    x=10;
    y=20;
    z=30;
    a=10;
    b=20;
    c=10;
    aa =10;
    printValues() {
        console.log(`x = ${this.x}, y = ${this.y}, z = ${this.z}, a=${this.a}, b=${this.b},c=${this.c}`);
        console.log("changes in master");
    }
}

// Create an instance and call the method
const test = new RebaseTest();
test.printValues();

