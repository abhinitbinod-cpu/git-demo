class RebaseTest{
    x=10;
    y=20;

    printValues() {
        console.log(`x = ${this.x}, y = ${this.y}`);
    }
}

// Create an instance and call the method
const test = new RebaseTest();
test.printValues();

