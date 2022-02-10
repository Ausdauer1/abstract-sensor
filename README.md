[[https://stately.ai/viz/c68fb382-365f-41cd-a6b8-a379a94189da](https://stately.ai/viz/c68fb382-365f-41cd-a6b8-a379a94189da) / 이벤트 버튼을 클릭해보세요](https://stately.ai/viz/embed/c68fb382-365f-41cd-a6b8-a379a94189da?mode=viz&panel=code&readOnly=1&showOriginalLink=1&controls=0&pan=0&zoom=0)

[https://stately.ai/viz/c68fb382-365f-41cd-a6b8-a379a94189da](https://stately.ai/viz/c68fb382-365f-41cd-a6b8-a379a94189da) / 이벤트 버튼을 클릭해보세요

- 꺼져 있는 기기는 언제든 켤 수 있다.
- 이미 켜져 있는 기기는 또 켤 수 없다.
- 기기가 켜지는 즉시 유휴 상태로 들어간다.
- 기기의 reportingInterval 초기 값은 10초여야 한다.
- 기기가 켜져 있는 상태에서는 어떤 동작을 하고 있어도 즉시 끌 수 있어야 한다.
- 유휴 상태에서 설정된 reportingInterval 값(단위: ms) 만큼 기다린 후 거리 측정을 한다.
- 거리 측정에 걸리는 시간은 항상 500ms 이내여야 한다.
- 데이터 보고에 걸리는 시간은 항상 1000ms 이내여야 하며, 데이터 보고 후 유휴 상태로 돌아간다.
- `CHANGE_REPORTING_INTERVAL` 액션이 발생하면 기기에 설정되어 있던 reportingInterval 값을 전달 받은 값으로 교체해야 한다.
    - 설정 가능한 값은 0~10초로 이내의 값으로 설정 가능해야 한다.
- 기기가 꺼지면 기기는 서버로 부터 어떠한 이벤트도 수신할 수 없다.