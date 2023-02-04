import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import UpButton from "../../components/UpButton/UpButton";
import AppFooterBlogVi from "../../components/AppFooter/AppFooterBlogVi";
import styles from '../../styles/Blog.module.css'

export default function Post2(props) {

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-B3Z17PVC6F"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-B3Z17PVC6F');
          `}
      </Script>
      <Head>
        <title>DeFi là gì và tầm quan trọng của nó - DeFi.vn</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../defi.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="DeFi là gì và tầm quan trọng của nó - DeFi.vn" />
        <meta property="og:description" content="Tại sao DeFi đã và đang tiếp tục thay đổi thế giới? Hãy cùng DeFi.vn phân tích lịch sử, công dụng và đúc kết ra đáp án nhé." />
        <meta property="og:url" content="https://defi.vn/reading/defi-la-gi" />
        <meta property="og:type" content="article"/>
        <meta property="og:image" content="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/ec66fb40-b466-48a1-ab10-5a9a1c7ec700/defiblog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="defi.vn" />
        <meta property="twitter:url" content="https://www.defi.vn/reading/defi-la-gi" />
        <meta name="twitter:title" content="DeFi là gì và tầm quan trọng của nó - DeFi.vn" />
        <meta name="twitter:description" content="ại sao DeFi đã và đang tiếp tục thay đổi thế giới? Hãy cùng DeFi.vn phân tích lịch sử, công dụng và đúc kết ra đáp án nhé." />
        <meta name="twitter:image" content="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/ec66fb40-b466-48a1-ab10-5a9a1c7ec700/defiblog" />
      </Head>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">DeFi là gì và tầm quan trọng của nó</h1>
          <blockquote>Một hệ sinh thái tài chính mở và phổ biến toàn cầu cho kỷ nguyên số</blockquote>
          <div className={styles.page_nav}>
            <Link href="/">🏠 Quay về trang chủ</Link>
            <Link href="/reading">⬅️ Quay về trang trước</Link>
          </div>
          <div>Wiki</div>
          <div>DeFi</div>
          <div className={styles.thumbnail_image_container}>
            <Image
              src="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/ec66fb40-b466-48a1-ab10-5a9a1c7ec700/defiblog"
              alt="defi là gì thumbnail"
              width={1600}
              height={840}
            />
          </div>
          <p>DeFi là một hệ thống tài chính mở và toàn cầu được xây dựng cho thời đại internet - một giải pháp thay thế cho thể chế tài chính hiện tại, một thể chế tài chính với nhiều bí ẩn, kiểm duyệt chặt chẽ với cơ sở hạ tầng có từ những thập niên trước. DeFi cung cấp cho bạn quyền kiểm soát và khả năng theo dõi tiền của bạn. Nó cho phép bạn tiếp xúc với các thị trường quốc tế và các lựa chọn thay thế cho nội tệ hoặc ngân hàng của bạn. Các sản phẩm của DeFi cho phép bất kỳ ai có kết nối internet tiếp cận tới dịch vụ tài chính; những sản phẩm này phần lớn do người dùng sở hữu và duy trì. Cho đến nay, hàng chục tỷ đô la tiền điện tử đã chảy qua các ứng dụng DeFi và vẫn tiếp tục tăng lên hằng ngày.</p>
          <h2>DeFi là gì?</h2>
          <p>
            DeFi là một thuật ngữ chung cho các sản phẩm và dịch vụ tài chính cho bất kỳ người dùng của Ethereum, hay có nghĩa là bất kỳ ai có kết nối internet. Với DeFi, dịch vụ luôn hoạt động và không có cơ quan quản lý thẩm quyền nào có thể chặn thanh toán hoặc từ chối bạn truy cập. Các dịch vụ trước đây chậm chạp và có rủi ro lỗi sai do con người thì giờ đây tự động và an toàn hơn khi chúng được xử lý bằng ngôn ngữ lập trình mà bất kỳ ai cũng có thể kiểm tra và phán xét.
          </p>
          <p>
            Trên DeFi là một nền kinh tế tiền điện tử đang bùng nổ, nơi bạn có thể cho vay hoặc đi vay, mua hoặc bán, gửi tiết kiệm và nhiều tiện ích khác. Những người Argentina am hiểu về tiền điện tử đã sử dụng DeFi để thoát khỏi tình trạng lạm phát tê liệt. Các công ty đã bắt đầu trả lương cho nhân viên theo thời gian thực. Một số người thậm chí đã vay và trả hết các khoản vay trị giá hàng triệu đô la mà không cần bất kỳ giấy tờ tùy thân nào.
          </p>
          <h2>So sánh DeFi với tài chính truyền thống</h2>
          <p>Một trong những cách tốt nhất để nhìn thấy tiềm năng của DeFi là tìm hiểu những vướng mắc hiện tại.</p>
          <ul>
            <li>Một số người không được cấp quyền truy cập để thiết lập tài khoản ngân hàng hoặc sử dụng các dịch vụ tài chính.</li>
            <li>Thiếu khả năng tiếp cận các dịch vụ tài chính có thể khiến mọi người không có việc làm.</li>
            <li>Các dịch vụ tài chính có thể khiến bạn không được thanh toán.</li>
            <li>Một khoản phí ẩn của các dịch vụ tài chính là dữ liệu cá nhân của bạn.</li>
            <li>Chính phủ và các tổ chức tập trung có thể đóng cửa thị trường theo ý muốn.</li>
            <li>Giờ giao dịch thường giới hạn trong giờ làm việc của múi giờ cụ thể.</li>
            <li>Việc chuyển tiền có thể mất nhiều ngày do các quy trình nội bộ của con người.</li>
            <li>Có một khoản phí bảo hiểm đối với các dịch vụ tài chính bởi vì các tổ chức trung gian cần cắt giảm.</li>
          </ul>
          <div className={styles.blog_grid_container}>
              <div>
                <h3>DeFi</h3>
                <ul className={styles.ul_good}>
                  <li>Bạn giữ tiền</li>
                  <li>Bạn quyết định nơi bạn gửi tiền và mục đích sử dụng</li>
                  <li>Chuyển tiền diễn ra trong vài phút</li>
                </ul>
              </div>
              <div>
                <h3>Tài chính truyền thống</h3>
                <ul className={styles.ul_bad}>
                  <li>Tiền của bạn bị quản lý bởi các công ty tài chính</li>
                  <li>Bạn tin các công ty tài chính không có sai phạm trong công tác quản lý, ví dụ như cho vay với rủi ro cao</li>
                  <li>Các khoản thanh toán có thể tốn vài ngày do quy trình thủ công</li>
                </ul>
              </div>
          </div>
          <h2>Điểm khởi đầu từ Bitcoin ...</h2>
          <p>Bitcoin có thể được cho là ứng dụng DeFi đầu tiên. Bitcoin cho phép bạn thực sự sở hữu và kiểm soát giá trị của nó, và bạn có thể gửi nó đến khắp nơi trên thế giới. Bitcoin thực hiện điều này bằng cách cung cấp một giao thức để một số lượng lớn người, những người không quen biết nhau, cùng đồng thuận về một sổ sách các tài khoản giao dịch mà không cần thông qua một bên trung gian. Bitcoin luôn mở cửa cho tất cả mọi người và không một ai có thẩm quyền để thay đổi các quy tắc của nó. Các quy luật của Bitcoin như là sự khan hiếm và tính mở của nó đều được khắc ghi vào cốt lõi công nghệ. Nó không giống như tài chính truyền thống, một định chế mà các cơ quan chính phủ có thể in tiền làm mất giá các khoản tiết kiệm của bạn và các công ty có thể đóng cửa giao dịch.</p>
          <p>Ethereum xây dựng dựa trên điều này. Giống như Bitcoin, các quy luật không thể thay đổi đối với bạn và mọi người đều có quyền truy cập. Nhưng Ethereum đi thêm một bước nữa là cung cấp một phương án giúp tiền điện tử có thể được lập trình thông qua các hợp đồng thông minh; vì vậy bạn có thể đạt được nhiều mục đích hơn là chỉ có việc lưu trữ và chuyển tiền.</p>
          <h2>Tiền có thể lập trình</h2>
          <p>Điều này nghe có vẻ kỳ quặc... <strong>"tại sao tôi lại muốn lập trình tiền của mình"</strong>? Tuy nhiên, đây chỉ là một tính năng mặc định của token trên Ethereum. Bất kỳ ai cũng có thể lập trình các quy định vào thanh toán. Vì vậy, bạn có được sự kiểm soát và bảo mật của Bitcoin cùng với các dịch vụ được cung cấp bởi các tổ chức tài chính. Điều này cho phép bạn làm được những việc như là cho vay và đi vay, lên lịch thanh toán, đầu tư vào quỹ index, v.v...</p>
          <h2>Bạn có thể làm gì với DeFi?</h2>
          <p>Luôn luôn có một giải pháp phi tập trung để thay thế hầu hết các dịch vụ tài chính hiện tại. Nhưng Ethereum là nơi sản sinh ra các sản phẩm tài chính hoàn toàn mới. Đây là một danh sách ngày càng tăng.</p>
          <ul>
            <li>Gửi tiền khắp thế giới</li>
            <li>Gửi tiền thời gian thực</li>
            <li>Tiếp cập stablecoin</li>
            <li>Vay vốn bằng tài sản thế chấp</li>
            <li>Vay không cần thế chấp</li>
            <li>Tiết kiệm cho tiền điện tử</li>
            <li>Giao dịch token</li>
            <li>Phát triển danh mục đầu tư của bạn</li>
            <li>Tài trợ cho ý tưởng của bạn</li>
            <li>Mua bảo hiểm</li>
            <li>Quản lý danh mục đầu tư của bạn</li>
          </ul>
          <h2>Gửi tiền nhanh chóng trên toàn cầu</h2>
          <p>Là một blockchain, Ethereum được thiết kế để gửi các giao dịch một cách an toàn và toàn cầu. Giống như Bitcoin, Ethereum giúp việc gửi tiền trên khắp thế giới dễ dàng như gửi email. Chỉ cần nhập tên ENS của người nhận (như 0xstim.eth) hoặc địa chỉ tài khoản của họ từ ví của bạn và thanh toán của bạn sẽ được chuyển trực tiếp đến họ trong vài phút (thông thường). Để gửi hoặc nhận thanh toán, bạn sẽ cần một chiếc ví.</p>
          <h2>Gửi tiền thời gian thực...</h2>
          <p>Bạn cũng có thể truyền tiền qua Ethereum. Điều này cho phép bạn trả lương cho ai đó theo thứ hai, giúp họ tiếp cận với tiền của mình bất cứ khi nào họ cần. Hoặc thuê thứ gì đó thứ hai như tủ để đồ hoặc xe điện.</p>
          <p>Và nếu bạn không muốn gửi hoặc phát trực tuyến ETH vì giá trị của nó có thể thay đổi bao nhiêu, thì có một loại tiền tệ thay thế trên Ethereum: stablecoin.</p>
          <h2>Truy cập tiền tệ ổn định</h2>
          <p>Sự biến động của tiền điện tử là một vấn đề đối với nhiều sản phẩm tài chính và chi tiêu nói chung. Cộng đồng DeFi đã giải quyết vấn đề này bằng stablecoin. Giá trị của chúng được gắn với một tài sản khác, thường là một loại tiền tệ phổ biến như đô la.</p>
          <p>Các loại tiền như Dai hoặc USDC có giá trị nằm trong khoảng vài cent của một đô la. Điều này làm cho chúng hoàn hảo để kiếm tiền hoặc bán lẻ. Nhiều người ở Mỹ Latinh đã sử dụng stablecoin như một cách để bảo vệ khoản tiết kiệm của họ trong thời điểm có nhiều bất ổn với đồng tiền do chính phủ phát hành.</p>
          <h2>Vay</h2>
          <p>Vay tiền từ các nhà cung cấp phi tập trung có hai loại chính.</p>
          <ul>
            <li>Peer-to-peer, nghĩa là người đi vay sẽ vay trực tiếp từ một người cho vay cụ thể.</li>
            <li>Dựa trên nhóm cho vay, nơi người cho vay cung cấp tiền (thanh khoản) cho một nhóm mà người đi vay có thể vay.</li>
          </ul>
          <p>Có rất nhiều lợi ích khi sử dụng một người cho vay phi tập trung...</p>
          <h3>Vay với sự riêng tư</h3>
          <p>Ngày nay, việc cho vay và đi vay tiền đều xoay quanh những cá nhân liên quan. Các ngân hàng cần biết liệu bạn có khả năng trả một khoản vay hay không trước khi cho vay.</p>
          <p>Hoạt động cho vay phi tập trung hoạt động mà không bên nào phải xác định danh tính của mình. Thay vào đó, người đi vay phải đưa ra tài sản thế chấp mà người cho vay sẽ tự động nhận được nếu khoản vay của họ không được hoàn trả. Một số người cho vay thậm chí chấp nhận NFT làm tài sản thế chấp. NFT là một chứng thư cho một tài sản duy nhất, giống như một bức tranh. Thêm trên NFTs</p>
          <p>Điều này cho phép bạn vay tiền mà không cần kiểm tra tín dụng hoặc chuyển giao thông tin cá nhân.</p>
          <h3>Tiếp cận các quỹ toàn cầu</h3>
          <p>Khi bạn sử dụng một tổ chức cho vay phi tập trung, bạn có quyền truy cập vào các khoản tiền được gửi từ khắp nơi trên thế giới, không chỉ các khoản tiền do ngân hàng hoặc tổ chức bạn đã chọn. Điều này làm cho các khoản vay dễ tiếp cận hơn và cải thiện lãi suất.</p>
          <h3>Hiệu quả về thuế</h3>
          <p>Việc vay có thể cho phép bạn truy cập vào số tiền bạn cần mà không cần phải bán ETH của bạn (một sự kiện chịu thuế). Thay vào đó, bạn có thể sử dụng ETH làm tài sản thế chấp cho khoản vay stablecoin. Điều này mang lại cho bạn dòng tiền bạn cần và cho phép bạn giữ ETH của mình. Stablecoin là mã thông báo tốt hơn nhiều khi bạn cần tiền mặt vì chúng không dao động về giá trị như ETH.</p>
          <h3>Vay Flash</h3>
          <p>Vay Flash là một hình thức cho vay phi tập trung thử nghiệm hơn cho phép bạn vay mà không cần thế chấp hoặc cung cấp bất kỳ thông tin cá nhân nào.</p>
          <p>Những người không rành về kỹ thuật hiện không thể tiếp cận rộng rãi chúng nhưng chúng gợi ý về những gì có thể có đối với mọi người trong tương lai.</p>
          <p>Nó hoạt động trên cơ sở khoản vay được thực hiện và trả lại trong cùng một giao dịch. Nếu không thể hoàn trả, giao dịch sẽ hoàn nguyên như thể chưa từng có gì xảy ra.</p>
          <p>Các quỹ thường được sử dụng được giữ trong các pool thanh khoản (các quỹ lớn được sử dụng để vay). Nếu chúng không được sử dụng tại một thời điểm nhất định, điều này tạo cơ hội cho ai đó vay những khoản tiền này, tiến hành kinh doanh với chúng và hoàn trả đầy đủ chúng theo đúng nghĩa đen cùng thời điểm chúng đã vay.</p>
          <p>Điều này có nghĩa là rất nhiều logic phải được đưa vào một giao dịch rất riêng. Một ví dụ đơn giản có thể là ai đó sử dụng khoản vay nhanh để vay nhiều tài sản ở một mức giá để họ có thể bán nó trên một sàn giao dịch khác nơi giá cao hơn.</p>
          <p>Vì vậy, trong một giao dịch duy nhất, điều sau sẽ xảy ra:</p>
          <p>Bạn vay X lượng tài sản $ 1,00 từ sàn giao dịch A Bạn bán tài sản X $ trên sàn giao dịch B với giá 1,10 đô la Bạn trả lại khoản vay để đổi A Bạn giữ lợi nhuận trừ đi phí giao dịch Nếu nguồn cung của Exchange B giảm đột ngột và người dùng không thể mua đủ để trang trải khoản vay ban đầu, giao dịch sẽ thất bại.</p>
          <p>Để có thể làm được ví dụ trên trong thế giới tài chính truyền thống, bạn cần một số tiền khổng lồ. Những chiến lược kiếm tiền này chỉ có thể tiếp cận được với những người có tài sản hiện có. Các khoản vay chớp nhoáng là một ví dụ về một tương lai mà việc có tiền không nhất thiết là điều kiện tiên quyết để kiếm tiền.</p>
          <h2>Bắt đầu tiết kiệm bằng tiền điện tử</h2>
          <h3>Cho vay</h3>
          <p>Bạn có thể kiếm lãi từ tiền điện tử của mình bằng cách cho vay và xem số tiền của bạn tăng lên trong thời gian thực. Hiện tại, lãi suất cao hơn nhiều so với những gì bạn có thể nhận được tại ngân hàng địa phương của mình (nếu bạn đủ may mắn để có thể truy cập vào một ngân hàng địa phương). Đây là một ví dụ:</p>
          <p><em>Bạn cho một sản phẩm như Aave mượn 100 Dai, một stablecoin của mình. Bạn nhận được 100 Aave Dai (aDai), đây là mã thông báo đại diện cho Dai đã cho bạn vay. ADai của bạn sẽ tăng lên dựa trên lãi suất và bạn có thể thấy số dư của mình đang tăng lên trong ví. Phụ thuộc vào APR, số dư trong ví của bạn sẽ đọc như 100.1234 sau một vài ngày hoặc thậm chí vài giờ! Bạn có thể rút một lượng Dai thông thường bằng với số dư aDai của bạn bất kỳ lúc nào.</em></p>
          <h3>Xổ số không lỗ</h3>
          <p>Xổ số không thua lỗ như PoolTogether là một cách mới thú vị và sáng tạo để tiết kiệm tiền.</p>
          <p>Bạn mua 100 vé bằng 100 Dai tokens. Bạn nhận được 100 plDai đại diện cho 100 vé của bạn. Nếu một trong các vé của bạn được chọn là người chiến thắng, số dư plDai của bạn sẽ tăng lên theo số lượng giải thưởng. Nếu bạn không thắng, 100 plDai của bạn sẽ chuyển sang lượt rút của tuần sau. Bạn có thể rút một lượng Dai thông thường bằng với số dư plDai của bạn bất kỳ lúc nào. Tổng giải thưởng được tạo ra bởi tất cả tiền lãi được tạo ra bằng cách cho vay tiền gửi vé như trong ví dụ cho vay ở trên.</p>
          <h2>Trao đổi token</h2>
          <p>Có hàng nghìn mã thông báo trên Ethereum. Các sàn giao dịch phi tập trung (DEX) cho phép bạn giao dịch các mã thông báo khác nhau bất cứ khi nào bạn muốn. Bạn không bao giờ từ bỏ quyền kiểm soát tài sản của mình. Điều này giống như sử dụng trao đổi tiền tệ khi đến thăm một quốc gia khác. Nhưng phiên bản DeFi không bao giờ đóng. Thị trường hoạt động 24/7, 365 ngày một năm và công nghệ đảm bảo sẽ luôn có người chấp nhận giao dịch.</p>
          <p>Ví dụ: nếu bạn muốn sử dụng xổ số không lỗ PoolTogether (được mô tả ở trên), bạn sẽ cần một mã thông báo như Dai hoặc USDC. Các DEX này cho phép bạn hoán đổi ETH của mình cho các mã thông báo đó và quay lại khi bạn hoàn tất.</p>
          <h2>Giao dịch nâng cao</h2>
          <p>Có nhiều tùy chọn nâng cao hơn cho các nhà giao dịch thích kiểm soát nhiều hơn một chút. Các lệnh giới hạn, lệnh vĩnh viễn, giao dịch ký quỹ và hơn thế nữa đều có thể thực hiện được. Với giao dịch phi tập trung, bạn có quyền truy cập vào tính thanh khoản toàn cầu, thị trường không bao giờ đóng cửa và bạn luôn kiểm soát tài sản của mình.</p>
          <p>Khi bạn sử dụng một sàn giao dịch tập trung, bạn phải ký quỹ tài sản của mình trước khi giao dịch và tin tưởng giao cho họ. Trong khi tài sản của bạn được ký gửi, chúng sẽ gặp rủi ro vì các sàn giao dịch tập trung là mục tiêu hấp dẫn của tin tặc.</p>
          <h2>Phát triển danh mục đầu tư của bạn</h2>
          <p>Có những sản phẩm quản lý quỹ trên Ethereum sẽ cố gắng phát triển danh mục đầu tư của bạn dựa trên chiến lược bạn chọn. Điều này là tự động, mở cho tất cả mọi người và không cần người quản lý con người cắt giảm lợi nhuận của bạn.</p>
          <p>Một ví dụ điển hình là quỹ DeFi Pulse Index (DPI). Đây là quỹ tự động tái cân bằng để đảm bảo danh mục đầu tư của bạn luôn bao gồm các mã thông báo DeFi hàng đầu theo vốn hóa thị trường. Bạn không bao giờ phải quản lý bất kỳ chi tiết nào và bạn có thể rút khỏi quỹ bất cứ khi nào bạn muốn.</p>
          <h2>Tài trợ cho ý tưởng của bạn</h2>
          <p>Ethereum là một nền tảng lý tưởng để huy động vốn từ cộng đồng:</p>
          <p>Các nhà tài trợ tiềm năng có thể đến từ mọi nơi - Ethereum và các mã thông báo của nó được mở cho bất kỳ ai, ở bất kỳ đâu trên thế giới. Nó minh bạch để những người gây quỹ có thể chứng minh số tiền đã được huy động. Bạn thậm chí có thể theo dõi cách tiền được chi tiêu sau này. Người gây quỹ có thể thiết lập hoàn lại tiền tự động, ví dụ: nếu có thời hạn cụ thể và số tiền tối thiểu không được đáp ứng.</p>
          <h3>Tài trợ bậc hai</h3>
          <p>Ethereum là phần mềm mã nguồn mở và rất nhiều công việc cho đến nay đã được cộng đồng tài trợ. Điều này đã dẫn đến sự phát triển của một mô hình gây quỹ mới thú vị: tài trợ bậc hai. Điều này có khả năng cải thiện cách chúng tôi tài trợ cho tất cả các loại hàng hóa công trong tương lai.</p>
          <p>Tài trợ bậc hai đảm bảo rằng các dự án nhận được nhiều tài trợ nhất là những dự án có nhu cầu duy nhất. Nói cách khác, các dự án có thể cải thiện cuộc sống của nhiều người nhất. Đây là cách nó hoạt động:</p>
          <ol>
            <li>Có một nhóm quỹ phù hợp được quyên góp.</li>
            <li>Một vòng tài trợ công cộng bắt đầu.</li>
            <li>Mọi người có thể báo hiệu nhu cầu của họ đối với một dự án bằng cách quyên góp một số tiền.</li>
            <li>Khi vòng kết thúc, nhóm phù hợp sẽ được phân phối cho các dự án. Những người có nhu cầu độc nhất nhận được số tiền cao nhất từ ​​nhóm phù hợp.</li>
          </ol>
          <p>Điều này có nghĩa là Dự án A với 100 lần quyên góp 1 đô la có thể nhận được nhiều tiền hơn Dự án B với một khoản đóng góp 10.000 đô la (phụ thuộc vào quy mô của nhóm phù hợp).</p>
          <h2>Bảo hiểm</h2>
          <p>Bảo hiểm phi tập trung nhằm mục đích làm cho bảo hiểm rẻ hơn, thanh toán nhanh hơn và minh bạch hơn. Với tự động hóa nhiều hơn, phạm vi bảo hiểm có giá cả phải chăng hơn và thanh toán nhanh hơn rất nhiều. Dữ liệu được sử dụng để quyết định yêu cầu của bạn là hoàn toàn minh bạch.</p>
          <p>Các sản phẩm Ethereum, giống như bất kỳ phần mềm nào, có thể bị lỗi và bị khai thác. Vì vậy, ngay bây giờ rất nhiều sản phẩm bảo hiểm trong không gian tập trung vào việc bảo vệ người dùng của họ chống lại việc mất tiền. Tuy nhiên, có những dự án bắt đầu xây dựng phạm vi bảo hiểm cho mọi thứ mà cuộc sống có thể ném vào chúng ta. Một ví dụ điển hình về điều này là Che phủ cây trồng của Etherisc nhằm mục đích bảo vệ nông dân sản xuất nhỏ ở Kenya chống lại hạn hán và lũ lụt. Bảo hiểm phi tập trung có thể cung cấp bảo hiểm rẻ hơn cho nông dân, những người thường bị định giá so với bảo hiểm truyền thống</p>
          <h2>Người tổng hợp và người quản lý danh mục đầu tư</h2>
          <p>Với rất nhiều thứ đang diễn ra, bạn sẽ cần một cách để theo dõi tất cả các khoản đầu tư, khoản vay và giao dịch của mình. Có một loạt các sản phẩm cho phép bạn điều phối tất cả hoạt động DeFi của mình từ một nơi. Đây là vẻ đẹp của kiến ​​trúc mở của DeFi. Các nhóm có thể xây dựng các giao diện mà bạn không thể chỉ xem số dư của mình trên các sản phẩm mà còn có thể sử dụng các tính năng của họ. Bạn có thể thấy điều này hữu ích khi khám phá thêm về DeFi.</p>
          <h2>DeFi hoạt động như thế nào?</h2>
          <p>DeFi sử dụng tiền điện tử và hợp đồng thông minh để cung cấp các dịch vụ không cần người trung gian. Trong thế giới tài chính ngày nay, các tổ chức tài chính đóng vai trò là người bảo lãnh cho các giao dịch. Điều này mang lại cho các tổ chức này sức mạnh to lớn vì tiền của bạn chảy qua chúng. Thêm vào đó, hàng tỷ người trên thế giới thậm chí không thể truy cập vào tài khoản ngân hàng.</p>
          <p>Trong DeFi, một hợp đồng thông minh thay thế tổ chức tài chính trong giao dịch. Hợp đồng thông minh là một loại tài khoản Ethereum có thể giữ tiền và có thể gửi / hoàn lại tiền dựa trên các điều kiện nhất định. Không ai có thể thay đổi hợp đồng thông minh đó khi nó đang hoạt động - nó sẽ luôn chạy như được lập trình.</p>
          <p>Một hợp đồng được thiết kế để đưa ra một khoản trợ cấp hoặc tiền tiêu vặt có thể được lập trình để gửi tiền từ Tài khoản A đến Tài khoản B vào mỗi thứ Sáu hàng tuần. Và nó sẽ chỉ làm được điều đó miễn là Tài khoản A có đủ tiền cần thiết. Không ai có thể thay đổi hợp đồng và thêm Tài khoản C làm người nhận để ăn cắp tiền.</p>
          <p>Hợp đồng cũng được công khai cho bất kỳ ai kiểm tra và kiểm toán. Điều này có nghĩa là các hợp đồng xấu thường sẽ bị cộng đồng giám sát khá nhanh.</p>
          <p>Điều này có nghĩa là hiện tại cần phải tin tưởng vào nhiều thành viên kỹ thuật hơn của cộng đồng Ethereum, những người có thể đọc mã. Cộng đồng dựa trên mã nguồn mở giúp kiểm soát các nhà phát triển, nhưng nhu cầu này sẽ giảm dần theo thời gian khi các hợp đồng thông minh trở nên dễ đọc hơn và các cách khác để chứng minh độ tin cậy của mã được phát triển.</p>
          <h2>Ethereum và DeFi</h2>
          <p>Ethereum là nền tảng hoàn hảo cho DeFi vì một số lý do:</p>
          <ul>
            <li>Không ai sở hữu Ethereum hoặc các hợp đồng thông minh sống trên đó - điều này mang lại cho mọi người cơ hội sử dụng DeFi. Điều này cũng có nghĩa là không ai có thể thay đổi các quy tắc đối với bạn.</li>
            <li>Tất cả các sản phẩm của DeFi đều nói cùng một ngôn ngữ đằng sau hậu trường: Ethereum. Điều này có nghĩa là nhiều sản phẩm hoạt động liền mạch với nhau. Bạn có thể cho mượn mã thông báo trên một nền tảng và trao đổi mã thông báo chịu lãi suất trong một thị trường khác trên một ứng dụng hoàn toàn khác. Điều này giống như việc bạn có thể rút điểm khách hàng thân thiết tại ngân hàng của mình.</li>
            <li>Token và tiền điện tử được tích hợp vào Ethereum, một sổ cái được chia sẻ - việc theo dõi các giao dịch và quyền sở hữu là điều của Ethereum.</li>
            <li>Ethereum cho phép hoàn toàn tự do tài chính - hầu hết các sản phẩm sẽ không bao giờ quản lý tiền của bạn, để bạn kiểm soát.</li>
          </ul>
          <p>Bạn có thể nghĩ về DeFi trong các lớp:</p>
          <ol>
            <li>Chuỗi khối - Ethereum chứa lịch sử giao dịch và trạng thái của tài khoản.</li>
            <li>Tài sản - ETH và các mã thông báo (tiền tệ) khác.</li>
            <li>Các giao thức - hợp đồng thông minh cung cấp chức năng, ví dụ như một dịch vụ cho phép cho vay tài sản phi tập trung.</li>
            <li>Các ứng dụng - sản phẩm chúng tôi sử dụng để quản lý và truy cập các giao thức.</li>
          </ol>
          <h2>Phát triển ứng dụng trên DeFi</h2>
          <p>DeFi là một phong trào mã nguồn mở. Tất cả các giao thức và ứng dụng DeFi đều mở để bạn kiểm tra, phân nhánh và đổi mới. Do ngăn xếp phân lớp này (tất cả chúng đều chia sẻ cùng một blockchain và tài sản cơ sở), các giao thức có thể được kết hợp và khớp để mở khóa các cơ hội kết hợp độc đáo.</p>
          
          
          <br />
          <hr />
          <AppFooterBlogVi />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {},
  };
}

