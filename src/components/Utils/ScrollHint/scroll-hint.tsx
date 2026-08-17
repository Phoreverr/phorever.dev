import React, { useCallback, useEffect, useState } from 'react';
import './scroll-hint.scss';

const SCROLL_CONTAINER_SELECTOR = '.app-container .main_panel .main';

export default function MainScrollHint() {
  const [visible, setVisible] = useState(false);

  const update = useCallback(() => {
    const el = document.querySelector<HTMLElement>(SCROLL_CONTAINER_SELECTOR);
    if (!el) {
      setVisible(false);
      return;
    }

    const scrollable = el.scrollHeight - el.clientHeight;
    const canScroll = scrollable > 8;
    const remaining = el.scrollHeight - el.scrollTop - el.clientHeight;
    const atBottom = remaining <= 40;

    setVisible(canScroll && !atBottom);
  }, []);

  useEffect(() => {
    const el = document.querySelector<HTMLElement>(SCROLL_CONTAINER_SELECTOR);
    if (!el) return;

    const onScroll = () => {
      window.requestAnimationFrame(update);
    };

    update();

    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);

    const observer = new ResizeObserver(() => {
      window.requestAnimationFrame(update);
    });
    observer.observe(el);

    const content = el.querySelector('.pages_container');
    if (content) observer.observe(content);

    return () => {
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
      observer.disconnect();
    };
  }, [update]);

  if (!visible) {
    return null;
  }

  return (
    <div className="main_scroll_hint main_scroll_hint--visible" aria-hidden="false">
      <span className="main_scroll_hint_icon" title="Scroll for more">
        <i className="fas fa-chevron-down" aria-hidden="true" />
      </span>
    </div>
  );
}
