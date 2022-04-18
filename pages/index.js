import Button from "../atoms/button";

export default function Home() {
  return (
    <div className="bg-brand-yellow min-h-screen overflow-hidden">
      <div className="w-full text-center">
        <div className="mt-20 mx-auto border-4 border-brand-green rounded-full w-1/3 max-w-xs overflow-hidden">
          <img src="/logo.png" alt="public" />
        </div>
        <div className="mt-4 text-xl font-bold text-white">The Pixie Bee</div>
        <div className="w-full flex items-center justify-center space-x-2 mt-2">
          <a href="https://gumroad.com/discover">
            <img src="/social/twitter.svg" alt="twitter" />
          </a>
          <a href="https://gumroad.com/discover">
            <img src="/social/instagram.svg" alt="instagram" />
          </a>
        </div>
        <div>
          <div className="border-t border-brand-green w-1/2 my-3 h-0 mx-auto">
            &nbsp;
          </div>
          <div className="mt-8 space-y-8">
            <div>
              <Button>Order Food</Button>
            </div>
            <div>
              <Button>Get Subscription</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
