---
path: /post/ios-조각-audio-사용하기
title: iOS 조각 - Audio 사용하기
author: KimHeeCheol
date: '2020-03-15 14:09:07'
tags:
  - ios
  - swift
  - ios조각
draft: false
---

```toc
```

## iOS 에서 Audio 를 사용해보자

```swift
import UIKit
import AVFoundation

class ViewController: UIViewController {
    var player: AVAudioPlayer?

    override func viewDidLoad() {
        super.viewDidLoad()
    }


    // 1
    @IBAction func keyPressed(_ sender: Any) {
        print("I got pressed");
        playSound()
    }
    
    // 2
    func playSound() {
        guard let url = Bundle.main.url(forResource: "C", withExtension: "wav") else {
            return
        }
        
        do {
            try AVAudioSession.sharedInstance().setCategory(.playback, mode: .default)
            try AVAudioSession.sharedInstance().setActive(true)
            self.player = try  AVAudioPlayer(contentsOf: url, fileTypeHint: AVFileType.wav.rawValue)
            guard let player = self.player else {
                return
            }
            player.play()
        } catch let error {
            print(error.localizedDescription)
        }
        
    }
}

```

## 코드 알아보기

주석의 1번은 Storyboard 와 연결되어있는 버튼으로, 특정 버튼을 눌렀을 때 실행됩니다. 2번의 함수를 통해 지정된 소리를 재생시킵니다.

### [AVFoundation](https://developer.apple.com/documentation/avfoundation)

AVFoundation 프레임 워크는 시청각 미디어를 재생, 합성, 제어, export, import 처리작업을 하게 해줍니다.

![이미지](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/MediaPlaybackGuide/Contents/Resources/en.lproj/Art/media_playback_framework_2x.png)

AVFoundation 은 iOS, tvOS, macOS 에서 모두 사용할 수 있는데 그 이유는 아래의 계층구조로 공용으로 사용되는 프레임워크이기 때문입니다. AVFoundation 은 '기능' 을 제공하는 것이지 'View' 를 위한 UI 를 제공하지는 않습니다.  

여기서는 미디어를 재생시키는 방법으로 이용합니다.

#### [AVAudioSession](https://developer.apple.com/documentation/avfoundation/avaudiosession)

앱과 시스템 사이에 오디오를 실행시키 위한 중간 매체입니다. `.sharedInstance()` 메서드를 통해 공유하는 오디오 인스턴스를 가져옵니다. 

`.setCategory()` 를 이용해 오디오 세션에 사용할 카테고리를 지정합니다. `.playback` 카테고리는 '앱에 녹음된 음악이나 다른 소리를 재생하기 위한 카테고리' 이고, `.default` 모드는 기본 오디오 세션 모드입니다. 

> 카테고리나 모드에 따라서 오디오를 세부적으로 컨트롤 합니다.
>
> 예를 들어, `AVAudioSession.Category.soloAmbient` 카테고리는 동시재생 불가한 카테고리입니다.

`.setActive()` 를 이용해 오디오 세션을 활성화합니다.

> 다른 활성 오디오 세션의 우선순위나 믹싱 여부에 따라 활성화 여부가 달라집니다.  


#### [AVAudioPlayer](https://developer.apple.com/documentation/avfoundation/avaudioplayer)

AVAudioPlayer 를 초기화할 때 사용하려는 asset 의 URL 을 넘겨주고 `fileTypeHint` 값은 파일타입에 대해 지정해줍니다. 

파일이나 메모리에서 오디오를 재생하는 오디오 플레이어입니다. AVAudioPlayer 의 `play()` 는 비동기적으로 소리를 재생시킵니다. 오디오 플레이어가 준비되지 않은 경우에 암시적으로 `prepareToPlay()` 메서드를 호출해 오디오를 재생할 준비를합니다. 

> `prepareToPlay()` 함수를 호출하면 버퍼가 미리 로드되어 소리를 호출하는 시간이 단축됩니다. preload 기능을 의미합니다.

 

### [Bundle](https://developer.apple.com/documentation/foundation/bundle)

Bundle 은 앱의 정보나 파일들을 한 공간의 그룹화해서 저장한 Directory 입니다. 여기서는 오디오를 실행하기 위해 Bundle 을 이용해 리소스를 찾습니다.

#### [Bundle.main](https://developer.apple.com/documentation/foundation/bundle/1410786-main)

현재 실행파일이 포함 된 번들 객체를 반환합니다. 그리고 `.url` 을 통해 파일을 찾습니다. url 의 첫번째 인자로 찾으려는 파일의 '이름' 을 넣고 두번째 인자는 찾으려는 파일의 '확장자명' 을 넣어줍니다. 그 결과값은 string 타입의 경로가 반환됩니다. 


## 참고문서

* [Apple Developer Documentation](https://developer.apple.com/documentation/)
