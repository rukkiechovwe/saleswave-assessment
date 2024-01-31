import Icons from "@/app/_assets/icons";
import Images from "@/app/_assets/images";
import Image from "next/image";

const ListItem = ({ children }) => (
  <p className="text-neutral-50">{children}</p>
);

const Title = ({ children, logo }) =>
  !logo ? (
    <h3 className="text-lg font-medium text-neutral-50">{children}</h3>
  ) : (
    <h3 className="text-2xl font-bold leading-6 tracking-[0.72px] text-neutral-50">
      {children}
    </h3>
  );

const Box = ({ children, title }) => (
  <div className="space-y-6">
    <Title>{title}</Title>
    <div className="space-y-4">{children}</div>
  </div>
);

export default function Footer() {
  return (
    <div className="bg-black">
      <div className="container">
        <div className="grid grid-cols-5 gap-[37px] pt-[80px] pb-[60px] ">
          <div className="space-y-6 w-[205px]">
            <Title logo={true}>Exclusive</Title>
            <Box title="Subscribe">
              <ListItem>Get 10% off your first order</ListItem>
            </Box>
            <div className="border border-neutral-50 rounded flex gap-5 p-3">
              <p className="text-neutral-50 opacity-40">Enter your email</p>
              {Icons.ic_send}
            </div>
          </div>

          <div className="space-y-4">
            <Box title="Support">
              <ListItem>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</ListItem>
              <ListItem>exclusive@gmail.com</ListItem>
              <ListItem>+88015-88888-9999</ListItem>
            </Box>
          </div>

          <div className="space-y-6">
            <Box title="Account">
              <ListItem>My Account</ListItem>
              <ListItem>Login / Register</ListItem>
              <ListItem>Cart</ListItem>
              <ListItem>Wishlist</ListItem>
              <ListItem>Shop</ListItem>
            </Box>
          </div>

          <div className="space-y-6">
            <Box title="Quick Link">
              <ListItem>Privacy Policy</ListItem>
              <ListItem>Terms Of Use</ListItem>
              <ListItem>FAQ</ListItem>
              <ListItem>Contact</ListItem>
            </Box>
          </div>

          <div className="space-y-6">
            <Box title="Download App">
              <p className="opacity-70 text-white text-xs text-medium">
                Save $3 with App New User Only
              </p>
              <div className="flex gap-2">
                <Image
                  src={Images.qrcode}
                  alt="qrcode"
                  height={80}
                  width={80}
                ></Image>
                <div className="space-y-3">
                  <Image
                    src={Images.playstore}
                    alt="playstore"
                    height={40}
                  ></Image>
                  <Image
                    src={Images.appstore}
                    alt="appstore"
                    height={40}
                  ></Image>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                {Icons.ic_facebook}
                {Icons.ic_twitter}
                {Icons.ic_ig}
                {Icons.ic_linkedin}
              </div>
            </Box>
          </div>
        </div>
        <div className="pt-4 pb-6 border-t border-solid border-black-30">
          <p className="opacity-40 text-white text-xs text-center text-medium">
            © Copyright Rimel 2022. All right reserved
          </p>
        </div>
      </div>
    </div>
  );
}
