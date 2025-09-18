class RebaseTest{
    x=10;
    y=20;
    z=30;

    printValues() {
        console.log(`x = ${this.x}, y = ${this.y}, z = ${this.z}`);
    }
}

// Create an instance and call the method
const test = new RebaseTest();
test.printValues();

