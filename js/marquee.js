// 用JS克隆内容实现无缝滚动，保持HTML干净
        (function() {
            const track = document.getElementById('marqueeTrack');
            // 克隆所有子节点（一组内容），追加到末尾
            const children = Array.from(track.children);
            children.forEach(child => {
                const clone = child.cloneNode(true);
                track.appendChild(clone);
            });
        })();