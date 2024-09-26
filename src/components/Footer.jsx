import styled from "styled-components";

// Main Footer Container
const FooterContainer = styled.footer`
  width: 100%;
  background-color: #ffc57b;
  padding: 40px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

// Flexbox for the footer content
const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 40px;
  margin-left: 40px;
`;

// FlexGo Branding Section (on the left)
const BrandingSection = styled.div`
  flex: 1;
`;

const BrandTitle = styled.h2`
  font-size: 24px;
  color: #fff;
`;

const BrandText = styled.p`
  font-size: 14px;
  color: #333;
  margin-top: 10px;
`;

const SocialIcons = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 15px;
`;

// SVG icons styling (size adjustments)
const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SvgIcon = styled.svg`
  width: 100%;
  height: 100%;
`;

// Links Section Container (for "About", "Community", "Socials")
const LinksSection = styled.div`
  display: flex;
  justify-content: center;
  flex: 2;
  gap: 120px;
`;

// Individual Column Styles
const Column = styled.div`
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ColumnTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
`;

const ColumnLink = styled.a`
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #555;
  }
`;

// Bottom Links (Privacy and Terms)
const BottomLinks = styled.div`
  margin-top: 30px;
  text-align: center;
  font-size: 12px;
  color: #333;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ColumnPolicy = styled.a`
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
  cursor: pointer;
  text-decoration: none;
  margin-left: 40px;

  &:hover {
    color: #555;
  }
`;
const ColumnService = styled.a`
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
  cursor: pointer;
  text-decoration: none;
  margin-right: 40px;

  &:hover {
    color: #555;
  }
`;

export default function FooterSection() {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Branding Section (FlexGo and Social Icons) */}
        <BrandingSection>
          <BrandTitle>FLEXGO</BrandTitle>
          <BrandText>
            Our vision is to provide convenience and help increase your sales
            business.
          </BrandText>
          <SocialIcons>
            {/* Facebook Icon */}
            <IconWrapper>
              <SvgIcon
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
                  fill="#0F0F0F"
                ></path>
              </SvgIcon>
            </IconWrapper>

            {/* Instagram Icon */}
            <IconWrapper>
              <SvgIcon
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                  fill="#000000"
                ></path>
                <path
                  d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                  fill="#000000"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                  fill="#000000"
                ></path>
              </SvgIcon>
            </IconWrapper>

            {/* Twitter Icon */}
            <IconWrapper>
              <SvgIcon
                viewBox="0 -2 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705" />
              </SvgIcon>
            </IconWrapper>
          </SocialIcons>
        </BrandingSection>

        {/* Links Section */}
        <LinksSection>
          <Column>
            <ColumnTitle>About</ColumnTitle>
            <ColumnLink href="#">Our Story</ColumnLink>
            <ColumnLink href="#">Careers</ColumnLink>
            <ColumnLink href="#">Press</ColumnLink>
          </Column>

          <Column>
            <ColumnTitle>Community</ColumnTitle>
            <ColumnLink href="#">Blog</ColumnLink>
            <ColumnLink href="#">Developers</ColumnLink>
            <ColumnLink href="#">Support</ColumnLink>
          </Column>

          <Column>
            <ColumnTitle>Socials</ColumnTitle>
            <ColumnLink href="#">Facebook</ColumnLink>
            <ColumnLink href="#">Instagram</ColumnLink>
            <ColumnLink href="#">Twitter</ColumnLink>
          </Column>
        </LinksSection>
      </FooterContent>

      <BottomLinks>
        <ColumnPolicy href="#">Privacy Policy</ColumnPolicy>
        <ColumnService href="#">Terms of Service</ColumnService>
      </BottomLinks>
    </FooterContainer>
  );
}
