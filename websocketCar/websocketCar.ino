uint8_t DATA = 0;
uint8_t CLK = 2;
uint8_t FORWARD = 0B00111001;
uint8_t RIGHT = 0B00110101;
uint8_t LEFT = 0B00111010;
uint8_t BACKWARD = 0B00110110;
uint8_t STOP = 0B00000000;

void car(uint8_t  )
void setup() {
pinMode(DATA, OUTPUT);
pinMode(CLK, OUTPUT);

}

void loop() {
shiftOut(DATA, CLK, MSBFIRST, 0B00110101);
while(1) wdt_reset();
}
