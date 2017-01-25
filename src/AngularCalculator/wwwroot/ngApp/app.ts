namespace AngularCalculator {
    angular.module("AngularCalculator", []);

    class AngularCalculator {
        public currentVal: string = "0";
        public inVal: string = "";
        public operation: string = "none";

        public numKey(numVal: string) {
            if (this.currentVal == "0") {
                this.currentVal = "";
            }
            this.currentVal += numVal;
        }

        public selectOp(myOp: string) {
            this.operation = myOp;
            this.inVal = this.currentVal;
            this.currentVal = "0";
        }

        public clear() {
            this.currentVal = "0";
            this.operation = "none";
        }

        public execute() {
            switch (this.operation) {
                case "add":
                    this.currentVal = (parseFloat(this.inVal) + parseFloat(this.currentVal)).toPrecision(10).toString();               
                    break;
                case "sub":
                    this.currentVal = (parseFloat(this.inVal) - parseFloat(this.currentVal)).toPrecision(10).toString();
                    break;
                case "mult":
                    this.currentVal = (parseFloat(this.inVal) * parseFloat(this.currentVal)).toPrecision(10).toString();
                    break;
                case "div":
                    if (parseFloat(this.currentVal) == 0) {
                        this.currentVal = "Illegal division by zero!"
                    } else {
                        this.currentVal = (parseFloat(this.inVal) / parseFloat(this.currentVal)).toPrecision(10).toString();
                    }
                    break;
                default:
                    break;
            }
        }
    }

    angular.module("AngularCalculator").controller("Calculator", AngularCalculator);
}


