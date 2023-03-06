class Refresh {
    constructor(options) {
        this.page = 0;
        this.options = options;

        // 保存用户传递的参数 和 请求方法
        this.params = {};
        this.request = function () {
        };
    }

    /**
     * @author 初心
     * @desc 列表请求
     */
    getList(params = this.params) {
        this.params = params;
        return async (request = this.request) => {
            this.request = request;
            return await this.query();
        }
    }


    /**
     * @author 初心
     * @desc 内部真正接口请求
     */
    async query() {
        // 网络请求兜底
        try {
            // 每次请求 page++
            this.page = this.page + 1;
            // 列表请求
            const res = await this.request({...this.params, page: this.page});
            // 返回值
            return {
                res, page: this.page
            }
        } catch (e) {
            console.log(e)
        }
    }

    /**
     * @author 初心
     * @desc 请求重置
     */
    reset() {
        this.page = 0;
    }

    /**
     * @author 初心
     * @desc 下拉刷新
     */
    async refresh() {
        this.reset();
        await this.query();
    }
}


export default Refresh;