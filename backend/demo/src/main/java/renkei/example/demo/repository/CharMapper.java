package renkei.example.demo.repository;

import java.util.Collection;

import org.apache.ibatis.annotations.Mapper;

import renkei.example.demo.model.Char;

@Mapper
public interface CharMapper {
	
	/**
	 * セレクトボックス取得
	 * @return
	 */
	Collection<Char> searchSelectBox();

	/*
	 * キャラ一覧情報取得
	 */
	Collection<Char> selectList(String word);
}
