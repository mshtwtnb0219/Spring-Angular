package renkei.example.demo.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import renkei.example.demo.model.Char;
import renkei.example.demo.repository.CharMapper;

/**
 * 返却する値をJson形式で設定
 * 今回は文字列を指定
 * @Serviceをつけることで、クラスがDIコンテナへの登録対象として認識され、
 * 利用場所で、@Autowiredを付けてやることで、利用できる。
 * ※今回のサンプルでは@Serviceを付与しなくても動くが、Springを使ってる感を出すため、設定した。
 */
@Service
public class DemoService {
	
	
	@Autowired
	private CharMapper charMapper;
	
	/**
	 * セレクトボックス取得
	 * @return
	 */
	@Transactional
    public Collection<Char> searchSelectBox() {
        return charMapper.searchSelectBox();
    }
    
    /**
     * キャラ一覧
     */
	@Transactional
    public Collection<Char> selectCharList(String word) {
    	return charMapper.selectList(word);
    }
}
