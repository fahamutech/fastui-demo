/**
 * @param data {
 * {component: {states: *,inputs: *}, args: Array<*>}
 * }
 */
export function onStart(data) {
    // TODO: Implement the logic
    let options = {
        root: document.querySelector("#logs_container"),
        rootMargin: "0px",
        threshold: 0.01,
    };

    /**
     *
     * @param entries{IntersectionObserverEntry[]}
     * @param observer1
     */
    const callback = (entries, observer1) => {
        // console.log(entries, 'ENTRIES');
        // entries.forEach(el=>{
        // });
        // const el = entries[0];
        // console.log(el.target,'TARGET');
        // console.log(el.intersectionRatio,'RATIO');
        // console.log(el.intersectionRect,'RECT');
        // console.log(el.isIntersecting,'INTERSECTING');
        // console.log(el?.isVisible,'VISIBLE');
        // console.log(observer1.takeRecords(), 'ENTRIES');
        // console.log('-----------------');
        // data.component.states.setVHeight(el.isIntersecting?'100%':10);
    };
    const observer = new IntersectionObserver(callback, options);
    const {dataIndex} = data.component.states;
    const target = document.querySelector(`#_${dataIndex}log_item`);
    observer.observe(target);
    return () => {
        observer.unobserve(target);
        observer.disconnect();
    }
}