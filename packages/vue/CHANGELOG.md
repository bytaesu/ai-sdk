# @ai-sdk/vue

## 2.0.0-beta.35

### Patch Changes

- Updated dependencies [53569b8]
- Updated dependencies [88a8ee5]
- Updated dependencies [f2c7f19]
  - ai@5.0.0-beta.34
  - @ai-sdk/provider-utils@3.0.0-beta.10

## 2.0.0-beta.34

### Patch Changes

- Updated dependencies [48378b9]
- Updated dependencies [93d53a1]
- Updated dependencies [27deb4d]
  - ai@5.0.0-beta.33
  - @ai-sdk/provider-utils@3.0.0-beta.9

## 2.0.0-beta.33

### Patch Changes

- Updated dependencies [bc24722]
- Updated dependencies [13b4f46]
- Updated dependencies [56c232b]
  - ai@5.0.0-beta.32

## 2.0.0-beta.32

### Patch Changes

- Updated dependencies [6622441]
- Updated dependencies [ced8eee]
- Updated dependencies [cee64b2]
- Updated dependencies [ee38081]
- Updated dependencies [dd5fd43]
  - ai@5.0.0-beta.31
  - @ai-sdk/provider-utils@3.0.0-beta.8

## 2.0.0-beta.31

### Patch Changes

- ai@5.0.0-beta.30

## 2.0.0-beta.30

### Patch Changes

- Updated dependencies [e7fcc86]
- Updated dependencies [d92b9a8]
  - @ai-sdk/provider-utils@3.0.0-beta.7
  - ai@5.0.0-beta.29

## 2.0.0-beta.29

### Patch Changes

- Updated dependencies [ac34802]
- Updated dependencies [84343eb]
- Updated dependencies [a753b3a]
  - @ai-sdk/provider-utils@3.0.0-beta.6
  - ai@5.0.0-beta.28

## 2.0.0-beta.28

### Patch Changes

- Updated dependencies [d5ae088]
  - ai@5.0.0-beta.27

## 2.0.0-beta.27

### Patch Changes

- Updated dependencies [ae77a99]
- Updated dependencies [1f6ce57]
- Updated dependencies [5a975a4]
- Updated dependencies [2a62513]
- Updated dependencies [904fa5e]
- Updated dependencies [f81c720]
  - ai@5.0.0-beta.26

## 2.0.0-beta.26

### Patch Changes

- ai@5.0.0-beta.25

## 2.0.0-beta.25

### Patch Changes

- Updated dependencies [add5ac1]
- Updated dependencies [57edfcb]
- Updated dependencies [ff1c81a]
- Updated dependencies [e4c8647]
- Updated dependencies [383cbfa]
  - ai@5.0.0-beta.24
  - @ai-sdk/provider-utils@3.0.0-beta.5

## 2.0.0-beta.24

### Patch Changes

- Updated dependencies [89ba235]
  - ai@5.0.0-beta.23

## 2.0.0-beta.23

### Patch Changes

- Updated dependencies [de2d2ab]
- Updated dependencies [6c42e56]
- Updated dependencies [c93a8bc]
- Updated dependencies [20398f2]
- Updated dependencies [86293e5]
- Updated dependencies [205077b]
  - ai@5.0.0-beta.22
  - @ai-sdk/provider-utils@3.0.0-beta.4

## 2.0.0-beta.22

### Patch Changes

- Updated dependencies [38ae5cc]
- Updated dependencies [faea29f]
- Updated dependencies [90ac328]
- Updated dependencies [4a1e0c8]
- Updated dependencies [30ac566]
  - ai@5.0.0-beta.21

## 2.0.0-beta.21

### Patch Changes

- Updated dependencies [4c8f834]
  - ai@5.0.0-beta.20

## 2.0.0-beta.20

### Patch Changes

- Updated dependencies [10b21eb]
- Updated dependencies [75c3396]
- Updated dependencies [05d2819]
- Updated dependencies [db64cbe]
  - ai@5.0.0-beta.19
  - @ai-sdk/provider-utils@3.0.0-beta.3

## 2.0.0-beta.19

### Patch Changes

- Updated dependencies [d3960e3]
- Updated dependencies [9338f3e]
  - ai@5.0.0-beta.18

## 2.0.0-beta.18

### Patch Changes

- ai@5.0.0-beta.17

## 2.0.0-beta.17

### Patch Changes

- ai@5.0.0-beta.16

## 2.0.0-beta.16

### Patch Changes

- Updated dependencies [8e31d46]
  - ai@5.0.0-beta.15

## 2.0.0-beta.15

### Patch Changes

- ai@5.0.0-beta.14

## 2.0.0-beta.14

### Patch Changes

- Updated dependencies [377bbcf]
- Updated dependencies [ce1d1f3]
- Updated dependencies [c040e2f]
- Updated dependencies [c808e4d]
  - ai@5.0.0-beta.13

## 2.0.0-beta.13

### Patch Changes

- Updated dependencies [fc0380b]
- Updated dependencies [51f497d]
- Updated dependencies [4f3776c]
  - ai@5.0.0-beta.12

## 2.0.0-beta.12

### Patch Changes

- Updated dependencies [9e40cbe]
  - ai@5.0.0-beta.11

## 2.0.0-beta.11

### Patch Changes

- Updated dependencies [16ccfb2]
- Updated dependencies [90ca2b9]
- Updated dependencies [af1d5a5]
- Updated dependencies [2b637d6]
  - ai@5.0.0-beta.10

## 2.0.0-beta.10

### Patch Changes

- Updated dependencies [86cfc72]
  - ai@5.0.0-beta.9

## 2.0.0-beta.9

### Patch Changes

- Updated dependencies [6909543]
- Updated dependencies [c8fce91]
- Updated dependencies [9121250]
  - ai@5.0.0-beta.8

## 2.0.0-beta.8

### Patch Changes

- Updated dependencies [60132dd]
  - ai@5.0.0-beta.7

## 2.0.0-beta.7

### Patch Changes

- Updated dependencies [143c55b]
- Updated dependencies [f04ffe4]
- Updated dependencies [97c35c0]
- Updated dependencies [fccf75c]
  - ai@5.0.0-beta.6

## 2.0.0-beta.6

### Patch Changes

- Updated dependencies [4f3e637]
  - ai@5.0.0-beta.5

## 2.0.0-beta.5

### Patch Changes

- Updated dependencies [09f41ac]
  - ai@5.0.0-beta.4

## 2.0.0-beta.4

### Patch Changes

- ef1f95f: fix (vue): update chat class reactivity

  ## Problem

  In the new Vue `Chat` class, `messages` that were being passed as props or computed values were breaking the class' ability to update its internal state.

  ## Context

  In Vue's reactivity system `ref.value.<push|pop>(item)` is problematic because it mutates the array directly and Vue won’t detect this change in some cases. Creating a new array allows Vue to correctly track and trigger updates to any reactive dependencies. (Vue tracks assignments (`=`), not mutations (`push`, `pop`, `splice`, etc.) on `.value`.)

## 2.0.0-beta.3

### Patch Changes

- ai@5.0.0-beta.3

## 2.0.0-beta.2

### Patch Changes

- Updated dependencies [0d9583c]
- Updated dependencies [0571b98]
- Updated dependencies [c6b64a7]
- Updated dependencies [39a4fab]
- Updated dependencies [cb3b9c9]
- Updated dependencies [d1a034f]
  - ai@5.0.0-beta.2
  - @ai-sdk/provider-utils@3.0.0-beta.2

## 2.0.0-beta.1

### Patch Changes

- Updated dependencies [d88455d]
- Updated dependencies [45c1ea2]
- Updated dependencies [9ad0484]
- Updated dependencies [e025824]
- Updated dependencies [4048ce3]
- Updated dependencies [f2b041e]
- Updated dependencies [cb68df0]
- Updated dependencies [26695a3]
- Updated dependencies [bfdca8d]
- Updated dependencies [e7d2ce3]
- Updated dependencies [102b066]
- Updated dependencies [71f938d]
- Updated dependencies [28a5ed5]
- Updated dependencies [e862b5b]
- Updated dependencies [7bd025b]
  - ai@5.0.0-beta.1
  - @ai-sdk/provider-utils@3.0.0-beta.1

## 2.0.0-alpha.15

### Patch Changes

- Updated dependencies [b1e3abd]
- Updated dependencies [8ba77a7]
- Updated dependencies [04d5063]
- Updated dependencies [b4b4bb2]
- Updated dependencies [d884051]
- Updated dependencies [954aa73]
- Updated dependencies [142576e]
- Updated dependencies [395c85e]
- Updated dependencies [60e2c56]
  - ai@5.0.0-alpha.15
  - @ai-sdk/provider-utils@3.0.0-alpha.15

## 2.0.0-alpha.14

### Patch Changes

- Updated dependencies [63f9e9b]
  - ai@5.0.0-alpha.14
  - @ai-sdk/provider-utils@3.0.0-alpha.14

## 2.0.0-alpha.13

### Major Changes

- 0a710d8: feat (ui): typed tool parts in ui messages
- 901df02: feat (ui): use UI_MESSAGE generic

### Patch Changes

- Updated dependencies [0a710d8]
- Updated dependencies [6a83f7d]
- Updated dependencies [1f55c21]
- Updated dependencies [33eb499]
- Updated dependencies [901df02]
  - ai@5.0.0-alpha.13
  - @ai-sdk/provider-utils@3.0.0-alpha.13

## 2.0.0-alpha.12

### Patch Changes

- Updated dependencies [da1e6f0]
- Updated dependencies [4892798]
  - ai@5.0.0-alpha.12
  - @ai-sdk/provider-utils@3.0.0-alpha.12

## 2.0.0-alpha.11

### Patch Changes

- Updated dependencies [e8324c5]
  - ai@5.0.0-alpha.11
  - @ai-sdk/provider-utils@3.0.0-alpha.11

## 2.0.0-alpha.10

### Major Changes

- 98f25e5: chore (ui): remove managed chat inputs
- 98f25e5: chore (ui/vue): replace useChat with new Chat

### Patch Changes

- Updated dependencies [98f25e5]
- Updated dependencies [7bb58d4]
  - ai@5.0.0-alpha.10
  - @ai-sdk/provider-utils@3.0.0-alpha.10

## 2.0.0-alpha.9

### Patch Changes

- Updated dependencies [8255639]
- Updated dependencies [9ae327d]
  - ai@5.0.0-alpha.9
  - @ai-sdk/provider-utils@3.0.0-alpha.9

## 2.0.0-alpha.8

### Patch Changes

- Updated dependencies [4fef487]
- Updated dependencies [6b1c55c]
- Updated dependencies [2e4f9e4]
- Updated dependencies [c25cbce]
  - @ai-sdk/provider-utils@3.0.0-alpha.8
  - ai@5.0.0-alpha.8

## 2.0.0-alpha.7

### Patch Changes

- Updated dependencies [db345da]
- Updated dependencies [9b0da33]
- Updated dependencies [247ee0c]
  - ai@5.0.0-alpha.7
  - @ai-sdk/provider-utils@3.0.0-alpha.7

## 2.0.0-alpha.6

### Major Changes

- 8cbbad6: chore (ai): refactor and use chatstore in vue

### Patch Changes

- Updated dependencies [0d2c085]
- Updated dependencies [48a7606]
  - ai@5.0.0-alpha.6
  - @ai-sdk/provider-utils@3.0.0-alpha.6

## 2.0.0-alpha.5

### Patch Changes

- Updated dependencies [655cf3c]
- Updated dependencies [1675396]
- Updated dependencies [cf9af6e]
- Updated dependencies [ef256ed]
- Updated dependencies [1ed0287]
- Updated dependencies [825e8d7]
- Updated dependencies [7324c21]
  - ai@5.0.0-alpha.5

## 2.0.0-alpha.4

### Patch Changes

- Updated dependencies [b32c141]
- Updated dependencies [72d7d72]
- Updated dependencies [9315076]
- Updated dependencies [7d97ab6]
- Updated dependencies [37a916d]
- Updated dependencies [5f2b3d4]
  - ai@5.0.0-alpha.4
  - @ai-sdk/provider-utils@3.0.0-alpha.4

## 2.0.0-alpha.3

### Patch Changes

- Updated dependencies [ab7ccef]
- Updated dependencies [257224b]
- Updated dependencies [0463011]
- Updated dependencies [d306260]
  - ai@5.0.0-alpha.3
  - @ai-sdk/provider-utils@3.0.0-alpha.3

## 2.0.0-alpha.2

### Patch Changes

- Updated dependencies [82aa95d]
  - ai@5.0.0-alpha.2
  - @ai-sdk/provider-utils@3.0.0-alpha.2

## 2.0.0-alpha.1

### Patch Changes

- Updated dependencies [b346545]
- Updated dependencies [109c0ac]
  - ai@5.0.0-alpha.1
  - @ai-sdk/provider-utils@3.0.0-alpha.1

## 2.0.0-canary.23

### Patch Changes

- Updated dependencies [bedb239]
- Updated dependencies [507ac1d]
- Updated dependencies [2b9bbcd]
- Updated dependencies [f7e8bf4]
- Updated dependencies [cda32ba]
- Updated dependencies [50f0362]
- Updated dependencies [ed675de]
- Updated dependencies [faf8446]
- Updated dependencies [64f6d64]
  - ai@5.0.0-canary.24
  - @ai-sdk/provider-utils@3.0.0-canary.19

## 2.0.0-canary.22

### Major Changes

- 40acf9b: feat (ui): introduce ChatStore and ChatTransport

### Patch Changes

- Updated dependencies [40acf9b]
  - @ai-sdk/provider-utils@3.0.0-canary.18
  - ai@5.0.0-canary.23

## 2.0.0-canary.21

### Patch Changes

- Updated dependencies [e7dc6c7]
- Updated dependencies [a34eb39]
- Updated dependencies [b33ed7a]
- Updated dependencies [765f1cd]
  - ai@5.0.0-canary.22

## 2.0.0-canary.20

### Patch Changes

- cff5a9e: fix (ai-sdk/vue): fix status reactivity
- Updated dependencies [d964901]
- Updated dependencies [0560977]
- Updated dependencies [66af894]
- Updated dependencies [516be5b]
- Updated dependencies [bfbfc4c]
- Updated dependencies [ea7a7c9]
- Updated dependencies [1409e13]
  - ai@5.0.0-canary.21
  - @ai-sdk/provider-utils@3.0.0-canary.17

## 2.0.0-canary.19

### Patch Changes

- Updated dependencies [13fef90]
- Updated dependencies [e90d45d]
- Updated dependencies [bc3109f]
- Updated dependencies [496bbc1]
- Updated dependencies [da70d79]
- Updated dependencies [bcea599]
- Updated dependencies [48d675a]
- Updated dependencies [c7710a9]
- Updated dependencies [87b828f]
- Updated dependencies [35fc02c]
- Updated dependencies [b983b51]
  - ai@5.0.0-canary.20
  - @ai-sdk/provider-utils@3.0.0-canary.16

## 2.0.0-canary.18

### Patch Changes

- Updated dependencies [2d03e19]
- Updated dependencies [319b989]
- Updated dependencies [441d042]
- Updated dependencies [dcc549b]
- Updated dependencies [cb2b53a]
- Updated dependencies [e244a78]
  - ai@5.0.0-canary.19

## 2.0.0-canary.17

### Patch Changes

- Updated dependencies [a571d6e]
- Updated dependencies [c60f895]
- Updated dependencies [332167b]
- Updated dependencies [a8c8bd5]
- Updated dependencies [a662dea]
- Updated dependencies [41fa418]
  - @ai-sdk/provider-utils@3.0.0-canary.15
  - ai@5.0.0-canary.18

## 2.0.0-canary.16

### Patch Changes

- Updated dependencies [f04fb4a]
- Updated dependencies [fd1924b]
- Updated dependencies [957b739]
- Updated dependencies [fafc3f2]
- Updated dependencies [c9ad635]
- Updated dependencies [9bd5ab5]
- Updated dependencies [92cb0a2]
  - ai@5.0.0-canary.17
  - @ai-sdk/provider-utils@3.0.0-canary.14

## 2.0.0-canary.15

### Patch Changes

- Updated dependencies [ec78cdc]
- Updated dependencies [9b4d074]
- Updated dependencies [8b86e99]
- Updated dependencies [28ad69e]
- Updated dependencies [2524fc7]
- Updated dependencies [ec5933d]
- Updated dependencies [175b868]
  - ai@5.0.0-canary.16

## 2.0.0-canary.14

### Patch Changes

- Updated dependencies [d9209ca]
- Updated dependencies [ea27cc6]
- Updated dependencies [0ff02bb]
- Updated dependencies [4bfe9ec]
- Updated dependencies [2877a74]
  - ai@5.0.0-canary.15
  - @ai-sdk/provider-utils@3.0.0-canary.13

## 2.0.0-canary.13

### Patch Changes

- Updated dependencies [9bf7291]
- Updated dependencies [4617fab]
- Updated dependencies [a76a62b]
  - ai@5.0.0-canary.14
  - @ai-sdk/provider-utils@3.0.0-canary.12

## 2.0.0-canary.12

### Patch Changes

- Updated dependencies [14cb3be]
- Updated dependencies [66962ed]
- Updated dependencies [9301f86]
  - ai@5.0.0-canary.13
  - @ai-sdk/provider-utils@3.0.0-canary.11

## 2.0.0-canary.11

### Patch Changes

- ai@5.0.0-canary.12
- @ai-sdk/provider-utils@3.0.0-canary.10

## 2.0.0-canary.10

### Patch Changes

- Updated dependencies [8e64e9c]
  - ai@5.0.0-canary.11
  - @ai-sdk/provider-utils@3.0.0-canary.9

## 2.0.0-canary.9

### Patch Changes

- Updated dependencies [d8aeaef]
- Updated dependencies [3e10408]
  - ai@5.0.0-canary.10

## 2.0.0-canary.8

### Patch Changes

- Updated dependencies [a847c3e]
- Updated dependencies [5d142ab]
- Updated dependencies [cb9c9e4]
- Updated dependencies [8aa9e20]
- Updated dependencies [b32e192]
  - ai@5.0.0-canary.9
  - @ai-sdk/provider-utils@3.0.0-canary.8

## 2.0.0-canary.7

### Patch Changes

- Updated dependencies [5d1e3ba]
- Updated dependencies [26735b5]
- Updated dependencies [14c9410]
- Updated dependencies [7827a49]
- Updated dependencies [bd8a36c]
- Updated dependencies [b6f9f3c]
- Updated dependencies [92c8e66]
- Updated dependencies [fd65bc6]
- Updated dependencies [5bdff05]
  - ai@5.0.0-canary.8
  - @ai-sdk/provider-utils@3.0.0-canary.7

## 2.0.0-canary.6

### Patch Changes

- Updated dependencies [0b78e17]
- Updated dependencies [6fba4c7]
- Updated dependencies [3e3b9df]
- Updated dependencies [1766ede]
- Updated dependencies [f10304b]
  - ai@5.0.0-canary.7
  - @ai-sdk/provider-utils@3.0.0-canary.6

## 2.0.0-canary.5

### Patch Changes

- ai@5.0.0-canary.6
- @ai-sdk/provider-utils@3.0.0-canary.5

## 2.0.0-canary.4

### Patch Changes

- Updated dependencies [b71fe8d]
- Updated dependencies [d91b50d]
  - ai@5.0.0-canary.5
  - @ai-sdk/provider-utils@3.0.0-canary.4

## 2.0.0-canary.3

### Patch Changes

- Updated dependencies [a166433]
- Updated dependencies [9f95b35]
  - @ai-sdk/provider-utils@3.0.0-canary.3
  - @ai-sdk/ui-utils@2.0.0-canary.3

## 2.0.0-canary.2

### Patch Changes

- @ai-sdk/provider-utils@3.0.0-canary.2
- @ai-sdk/ui-utils@2.0.0-canary.2

## 2.0.0-canary.1

### Patch Changes

- Updated dependencies [060370c]
- Updated dependencies [0c0c0b3]
- Updated dependencies [63d791d]
  - @ai-sdk/provider-utils@3.0.0-canary.1
  - @ai-sdk/ui-utils@2.0.0-canary.1

## 2.0.0-canary.0

### Major Changes

- d5f588f: AI SDK 5
- 9477ebb: chore (ui): remove useAssistant hook (**breaking change**)

### Patch Changes

- Updated dependencies [d5f588f]
- Updated dependencies [9477ebb]
  - @ai-sdk/provider-utils@3.0.0-canary.0
  - @ai-sdk/ui-utils@2.0.0-canary.0

## 1.2.4

### Patch Changes

- a043b14: fix (ui): prevent early addToolResult submission
- Updated dependencies [28be004]
  - @ai-sdk/provider-utils@2.2.3
  - @ai-sdk/ui-utils@1.2.4

## 1.2.3

### Patch Changes

- Updated dependencies [b01120e]
  - @ai-sdk/provider-utils@2.2.2
  - @ai-sdk/ui-utils@1.2.3

## 1.2.2

### Patch Changes

- Updated dependencies [65243ce]
  - @ai-sdk/ui-utils@1.2.2

## 1.2.1

### Patch Changes

- Updated dependencies [f10f0fa]
  - @ai-sdk/provider-utils@2.2.1
  - @ai-sdk/ui-utils@1.2.1

## 1.2.0

### Minor Changes

- 5bc638d: AI SDK 4.2

### Patch Changes

- Updated dependencies [5bc638d]
  - @ai-sdk/provider-utils@2.2.0
  - @ai-sdk/ui-utils@1.2.0

## 1.1.24

### Patch Changes

- Updated dependencies [d0c4659]
  - @ai-sdk/provider-utils@2.1.15
  - @ai-sdk/ui-utils@1.1.21

## 1.1.23

### Patch Changes

- @ai-sdk/provider-utils@2.1.14
- @ai-sdk/ui-utils@1.1.20

## 1.1.22

### Patch Changes

- @ai-sdk/provider-utils@2.1.13
- @ai-sdk/ui-utils@1.1.19

## 1.1.21

### Patch Changes

- Updated dependencies [1531959]
  - @ai-sdk/provider-utils@2.1.12
  - @ai-sdk/ui-utils@1.1.18

## 1.1.20

### Patch Changes

- @ai-sdk/provider-utils@2.1.11
- @ai-sdk/ui-utils@1.1.17

## 1.1.19

### Patch Changes

- Updated dependencies [ddf9740]
  - @ai-sdk/ui-utils@1.1.16
  - @ai-sdk/provider-utils@2.1.10

## 1.1.18

### Patch Changes

- @ai-sdk/provider-utils@2.1.9
- @ai-sdk/ui-utils@1.1.15

## 1.1.17

### Patch Changes

- 60c3220: fix (ui): set status to ready after stream was aborted

## 1.1.16

### Patch Changes

- c43df41: feat (ui): add useChat status

## 1.1.15

### Patch Changes

- Updated dependencies [2e898b4]
  - @ai-sdk/provider-utils@2.1.8
  - @ai-sdk/ui-utils@1.1.14

## 1.1.14

### Patch Changes

- Updated dependencies [3ff4ef8]
  - @ai-sdk/provider-utils@2.1.7
  - @ai-sdk/ui-utils@1.1.13

## 1.1.13

### Patch Changes

- Updated dependencies [166e09e]
  - @ai-sdk/ui-utils@1.1.12

## 1.1.12

### Patch Changes

- 6c79b4e: feat (ui/vue): add support for prepareRequestBody

## 1.1.11

### Patch Changes

- Updated dependencies [318b351]
  - @ai-sdk/ui-utils@1.1.11

## 1.1.10

### Patch Changes

- bcc61d4: feat (ui): introduce message parts for useChat
- Updated dependencies [bcc61d4]
  - @ai-sdk/ui-utils@1.1.10

## 1.1.9

### Patch Changes

- Updated dependencies [6b8cc14]
  - @ai-sdk/ui-utils@1.1.9

## 1.1.8

### Patch Changes

- @ai-sdk/provider-utils@2.1.6
- @ai-sdk/ui-utils@1.1.8

## 1.1.7

### Patch Changes

- 0d2d9bf: fix (ui): empty submits (with allowEmptySubmit) create user messages
- 0d2d9bf: fix (ui): single assistant message with multiple tool steps
- Updated dependencies [0d2d9bf]
  - @ai-sdk/ui-utils@1.1.7

## 1.1.6

### Patch Changes

- Updated dependencies [3a602ca]
  - @ai-sdk/provider-utils@2.1.5
  - @ai-sdk/ui-utils@1.1.6

## 1.1.5

### Patch Changes

- Updated dependencies [066206e]
  - @ai-sdk/provider-utils@2.1.4
  - @ai-sdk/ui-utils@1.1.5

## 1.1.4

### Patch Changes

- Updated dependencies [39e5c1f]
  - @ai-sdk/provider-utils@2.1.3
  - @ai-sdk/ui-utils@1.1.4

## 1.1.3

### Patch Changes

- Updated dependencies [9ce598c]
  - @ai-sdk/ui-utils@1.1.3

## 1.1.2

### Patch Changes

- Updated dependencies [ed012d2]
  - @ai-sdk/provider-utils@2.1.2
  - @ai-sdk/ui-utils@1.1.2

## 1.1.1

### Patch Changes

- Updated dependencies [e7a9ec9]
- Updated dependencies [0a699f1]
  - @ai-sdk/ui-utils@1.1.1
  - @ai-sdk/provider-utils@2.1.1

## 1.1.0

### Minor Changes

- 62ba5ad: release: AI SDK 4.1

### Patch Changes

- Updated dependencies [62ba5ad]
  - @ai-sdk/provider-utils@2.1.0
  - @ai-sdk/ui-utils@1.1.0

## 1.0.13

### Patch Changes

- Updated dependencies [33592d2]
  - @ai-sdk/ui-utils@1.0.12

## 1.0.12

### Patch Changes

- Updated dependencies [00114c5]
- Updated dependencies [00114c5]
  - @ai-sdk/provider-utils@2.0.8
  - @ai-sdk/ui-utils@1.0.11

## 1.0.11

### Patch Changes

- 37f4510: feat (ui): expose useChat id and send it to the server
- Updated dependencies [37f4510]
  - @ai-sdk/ui-utils@1.0.10

## 1.0.10

### Patch Changes

- Updated dependencies [2495973]
- Updated dependencies [2495973]
  - @ai-sdk/ui-utils@1.0.9

## 1.0.9

### Patch Changes

- Updated dependencies [90fb95a]
- Updated dependencies [e6dfef4]
- Updated dependencies [6636db6]
  - @ai-sdk/provider-utils@2.0.7
  - @ai-sdk/ui-utils@1.0.8

## 1.0.8

### Patch Changes

- Updated dependencies [19a2ce7]
- Updated dependencies [6337688]
  - @ai-sdk/provider-utils@2.0.6
  - @ai-sdk/ui-utils@1.0.7

## 1.0.7

### Patch Changes

- Updated dependencies [5ed5e45]
  - @ai-sdk/provider-utils@2.0.5
  - @ai-sdk/ui-utils@1.0.6

## 1.0.6

### Patch Changes

- @ai-sdk/provider-utils@2.0.4
- @ai-sdk/ui-utils@1.0.5

## 1.0.5

### Patch Changes

- Updated dependencies [0984f0b]
  - @ai-sdk/provider-utils@2.0.3
  - @ai-sdk/ui-utils@1.0.4

## 1.0.4

### Patch Changes

- 953469c: feat (ui/vue): add support for attachments in useChat
- 953469c: chore (ui): extract prepareAttachmentsForRequest
- Updated dependencies [953469c]
- Updated dependencies [a3dd2ed]
  - @ai-sdk/ui-utils@1.0.3

## 1.0.3

### Patch Changes

- 630ac31: fix (ui): set tool invocation state to "result" when calling addToolResult

## 1.0.2

### Patch Changes

- Updated dependencies [88b364b]
  - @ai-sdk/ui-utils@1.0.2
  - @ai-sdk/provider-utils@2.0.2

## 1.0.1

### Patch Changes

- Updated dependencies [c3ab5de]
  - @ai-sdk/provider-utils@2.0.1
  - @ai-sdk/ui-utils@1.0.1

## 1.0.0

### Major Changes

- 8bf5756: chore: remove legacy function/tool calling
- 7814c4b: chore (ui): remove streamMode setting from useChat & useCompletion
- ca3e586: chore (ui): remove experimental_useAssistant export
- fe4f109: chore (ui): set default value of useChat keepLastMessageOnError to true
- 84edae5: chore (release): bump ui package versions for 4.0 release

### Patch Changes

- 79c6dd9: fix (ui): remove unnecessary calls to mutateStreamData in useChat
- 04d3747: chore (ui-utils): restructure processAssistantMessage
- Updated dependencies [8bf5756]
- Updated dependencies [b469a7e]
- Updated dependencies [9f81e66]
- Updated dependencies [70f28f6]
- Updated dependencies [dce4158]
- Updated dependencies [7814c4b]
- Updated dependencies [fe4f109]
- Updated dependencies [b1da952]
- Updated dependencies [04d3747]
- Updated dependencies [dce4158]
- Updated dependencies [7e89ccb]
- Updated dependencies [8426f55]
- Updated dependencies [db46ce5]
- Updated dependencies [b053413]
  - @ai-sdk/ui-utils@1.0.0
  - @ai-sdk/provider-utils@2.0.0

## 1.0.0-canary.9

### Patch Changes

- 79c6dd9: fix (ui): remove unnecessary calls to mutateStreamData in useChat
- 04d3747: chore (ui-utils): restructure processAssistantMessage
- Updated dependencies [04d3747]
  - @ai-sdk/ui-utils@1.0.0-canary.9

## 1.0.0-canary.8

### Patch Changes

- Updated dependencies [b053413]
  - @ai-sdk/ui-utils@1.0.0-canary.8

## 1.0.0-canary.7

### Major Changes

- fe4f109: chore (ui): set default value of useChat keepLastMessageOnError to true

### Patch Changes

- Updated dependencies [fe4f109]
  - @ai-sdk/ui-utils@1.0.0-canary.7

## 1.0.0-canary.6

### Patch Changes

- Updated dependencies [70f28f6]
  - @ai-sdk/ui-utils@1.0.0-canary.6

## 1.0.0-canary.5

### Patch Changes

- Updated dependencies [9f81e66]
- Updated dependencies [8426f55]
  - @ai-sdk/ui-utils@1.0.0-canary.5
  - @ai-sdk/provider-utils@2.0.0-canary.3

## 1.0.0-canary.4

### Major Changes

- ca3e586: chore (ui): remove experimental_useAssistant export

### Patch Changes

- Updated dependencies [dce4158]
- Updated dependencies [dce4158]
  - @ai-sdk/provider-utils@2.0.0-canary.2
  - @ai-sdk/ui-utils@1.0.0-canary.4

## 1.0.0-canary.3

### Patch Changes

- Updated dependencies [b1da952]
  - @ai-sdk/provider-utils@2.0.0-canary.1
  - @ai-sdk/ui-utils@1.0.0-canary.3

## 1.0.0-canary.2

### Major Changes

- 7814c4b: chore (ui): remove streamMode setting from useChat & useCompletion

### Patch Changes

- Updated dependencies [b469a7e]
- Updated dependencies [7814c4b]
- Updated dependencies [db46ce5]
  - @ai-sdk/provider-utils@2.0.0-canary.0
  - @ai-sdk/ui-utils@1.0.0-canary.2

## 1.0.0-canary.1

### Major Changes

- 8bf5756: chore: remove legacy function/tool calling

### Patch Changes

- Updated dependencies [8bf5756]
  - @ai-sdk/ui-utils@1.0.0-canary.1

## 1.0.0-canary.0

### Major Changes

- 84edae5: chore (release): bump ui package versions for 4.0 release

### Patch Changes

- Updated dependencies [7e89ccb]
  - @ai-sdk/ui-utils@1.0.0-canary.0

## 0.0.59

### Patch Changes

- Updated dependencies [a85c965]
  - @ai-sdk/ui-utils@0.0.50

## 0.0.58

### Patch Changes

- Updated dependencies [3bf8da0]
  - @ai-sdk/ui-utils@0.0.49

## 0.0.57

### Patch Changes

- aa98cdb: chore: more flexible dependency versioning
- Updated dependencies [aa98cdb]
- Updated dependencies [7b937c5]
- Updated dependencies [811a317]
  - @ai-sdk/provider-utils@1.0.22
  - @ai-sdk/ui-utils@0.0.48

## 0.0.56

### Patch Changes

- @ai-sdk/provider-utils@1.0.21
- @ai-sdk/ui-utils@0.0.47

## 0.0.55

### Patch Changes

- caedcda: feat (ai/ui): add setData helper to useChat

## 0.0.54

### Patch Changes

- b5f577e: fix (ui/vue): prevent infinite looping steps

## 0.0.53

### Patch Changes

- @ai-sdk/provider-utils@1.0.20
- @ai-sdk/ui-utils@0.0.46

## 0.0.52

### Patch Changes

- Updated dependencies [cd77c5d]
  - @ai-sdk/ui-utils@0.0.45

## 0.0.51

### Patch Changes

- d3933e0: fix (ui/vue): keep intermediate assistant messages

## 0.0.50

### Patch Changes

- 692e265: feat (ui/vue): add multi-step support to useChat

## 0.0.49

### Patch Changes

- Updated dependencies [273f696]
  - @ai-sdk/provider-utils@1.0.19
  - @ai-sdk/ui-utils@0.0.44

## 0.0.48

### Patch Changes

- Updated dependencies [1f590ef]
  - @ai-sdk/ui-utils@0.0.43

## 0.0.47

### Patch Changes

- Updated dependencies [14210d5]
  - @ai-sdk/ui-utils@0.0.42

## 0.0.46

### Patch Changes

- Updated dependencies [03313cd]
  - @ai-sdk/provider-utils@1.0.18
  - @ai-sdk/ui-utils@0.0.41

## 0.0.45

### Patch Changes

- Updated dependencies [aa2dc58]
  - @ai-sdk/ui-utils@0.0.40

## 0.0.44

### Patch Changes

- @ai-sdk/provider-utils@1.0.17
- @ai-sdk/ui-utils@0.0.39

## 0.0.43

### Patch Changes

- Updated dependencies [d151349]
  - @ai-sdk/ui-utils@0.0.38

## 0.0.42

### Patch Changes

- Updated dependencies [09f895f]
  - @ai-sdk/provider-utils@1.0.16
  - @ai-sdk/ui-utils@0.0.37

## 0.0.41

### Patch Changes

- Updated dependencies [b5a82b7]
  - @ai-sdk/ui-utils@0.0.36

## 0.0.40

### Patch Changes

- Updated dependencies [d67fa9c]
  - @ai-sdk/provider-utils@1.0.15
  - @ai-sdk/ui-utils@0.0.35

## 0.0.39

### Patch Changes

- @ai-sdk/provider-utils@1.0.14
- @ai-sdk/ui-utils@0.0.34

## 0.0.38

### Patch Changes

- 04084a3: fix (ui/vue): use body and headers metadata

## 0.0.37

### Patch Changes

- @ai-sdk/provider-utils@1.0.13
- @ai-sdk/ui-utils@0.0.33

## 0.0.36

### Patch Changes

- Updated dependencies [dd712ac]
  - @ai-sdk/provider-utils@1.0.12
  - @ai-sdk/ui-utils@0.0.32

## 0.0.35

### Patch Changes

- @ai-sdk/provider-utils@1.0.11
- @ai-sdk/ui-utils@0.0.31

## 0.0.34

### Patch Changes

- Updated dependencies [e9c891d]
- Updated dependencies [4bd27a9]
- Updated dependencies [845754b]
  - @ai-sdk/ui-utils@0.0.30
  - @ai-sdk/provider-utils@1.0.10

## 0.0.33

### Patch Changes

- Updated dependencies [e5b58f3]
  - @ai-sdk/ui-utils@0.0.29

## 0.0.32

### Patch Changes

- @ai-sdk/provider-utils@1.0.9
- @ai-sdk/ui-utils@0.0.28

## 0.0.31

### Patch Changes

- @ai-sdk/provider-utils@1.0.8
- @ai-sdk/ui-utils@0.0.27

## 0.0.30

### Patch Changes

- @ai-sdk/provider-utils@1.0.7
- @ai-sdk/ui-utils@0.0.26

## 0.0.29

### Patch Changes

- Updated dependencies [9614584]
- Updated dependencies [0762a22]
  - @ai-sdk/provider-utils@1.0.6
  - @ai-sdk/ui-utils@0.0.25

## 0.0.28

### Patch Changes

- Updated dependencies [5be25124]
  - @ai-sdk/ui-utils@0.0.24

## 0.0.27

### Patch Changes

- Updated dependencies [fea7b604]
  - @ai-sdk/ui-utils@0.0.23

## 0.0.26

### Patch Changes

- Updated dependencies [1d93d716]
  - @ai-sdk/ui-utils@0.0.22

## 0.0.25

### Patch Changes

- c450fcf7: feat (ui): invoke useChat onFinish with finishReason and tokens
- e4a1719f: chore (ai/ui): rename streamMode to streamProtocol
- Updated dependencies [c450fcf7]
- Updated dependencies [e4a1719f]
  - @ai-sdk/ui-utils@0.0.21

## 0.0.24

### Patch Changes

- Updated dependencies [a8d1c9e9]
  - @ai-sdk/provider-utils@1.0.5
  - @ai-sdk/ui-utils@0.0.20

## 0.0.23

### Patch Changes

- Updated dependencies [4f88248f]
  - @ai-sdk/provider-utils@1.0.4
  - @ai-sdk/ui-utils@0.0.19

## 0.0.22

### Patch Changes

- @ai-sdk/provider-utils@1.0.3
- @ai-sdk/ui-utils@0.0.18

## 0.0.21

### Patch Changes

- f63829fe: feat (ai/ui): add allowEmptySubmit flag to handleSubmit
- 4b2c09d9: feat (ai/ui): add mutator function support to useChat / setMessages
- Updated dependencies [f63829fe]
  - @ai-sdk/ui-utils@0.0.17

## 0.0.20

### Patch Changes

- Updated dependencies [5b7b3bbe]
  - @ai-sdk/ui-utils@0.0.16

## 0.0.19

### Patch Changes

- 19c3d50f: fix (ai/ui): add missing createdAt

## 0.0.18

### Patch Changes

- Updated dependencies [1f67fe49]
  - @ai-sdk/ui-utils@0.0.15

## 0.0.17

### Patch Changes

- Updated dependencies [99ddbb74]
  - @ai-sdk/ui-utils@0.0.14

## 0.0.16

### Patch Changes

- a6cb2c8b: feat (ai/ui): add keepLastMessageOnError option to useChat
- Updated dependencies [a6cb2c8b]
  - @ai-sdk/ui-utils@0.0.13

## 0.0.15

### Patch Changes

- dd0d854e: feat (ai/vue): add useAssistant

## 0.0.14

### Patch Changes

- 56bbc2a7: feat (ai/ui): set body and headers directly on options for handleSubmit and append
- Updated dependencies [56bbc2a7]
  - @ai-sdk/ui-utils@0.0.12

## 0.0.13

### Patch Changes

- @ai-sdk/ui-utils@0.0.11

## 0.0.12

### Patch Changes

- 3db90c3d: allow empty handleSubmit submissions for useChat
  - @ai-sdk/ui-utils@0.0.10

## 0.0.11

### Patch Changes

- Updated dependencies [1894f811]
  - @ai-sdk/ui-utils@0.0.9

## 0.0.10

### Patch Changes

- d3100b9c: feat (ai/ui): support custom fetch function in useChat, useCompletion, useAssistant, useObject
- Updated dependencies [d3100b9c]
  - @ai-sdk/ui-utils@0.0.8

## 0.0.9

### Patch Changes

- @ai-sdk/ui-utils@0.0.7

## 0.0.8

### Patch Changes

- 82d9c8de: fix (@ai-sdk/vue): make event in handleSubmit optional

## 0.0.7

### Patch Changes

- Updated dependencies [54bf4083]
  - @ai-sdk/ui-utils@0.0.6

## 0.0.6

### Patch Changes

- d42b8907: feat (ui): make event in handleSubmit optional

## 0.0.5

### Patch Changes

- @ai-sdk/ui-utils@0.0.5

## 0.0.4

### Patch Changes

- Updated dependencies [008725ec]
  - @ai-sdk/ui-utils@0.0.4

## 0.0.3

### Patch Changes

- @ai-sdk/ui-utils@0.0.3

## 0.0.2

### Patch Changes

- @ai-sdk/ui-utils@0.0.2

## 0.0.1

### Patch Changes

- 85f209a4: chore: extracted ui library support into separate modules
- Updated dependencies [85f209a4]
  - @ai-sdk/ui-utils@0.0.1
